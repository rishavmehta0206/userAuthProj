import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { REGISTERUSER } from "../redux/authActions";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    REGISTERUSER(dispatch, { user, pwd });
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Form>
          <FormHeader>
            <FormTitle>Register.</FormTitle>
            <div
              style={{ width: "100%", borderBottom: "1px solid black" }}
            ></div>
          </FormHeader>
          <FormBody>
            <FormBodyFields>
              <span>Username.</span>
              <Input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                value={user}
                required
                placeholder="enter username"
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                onChange={(e) => setUser(e.target.value)}
              />
              {userFocus && user && !validName ? (
                <ErrorContainer>
                  <i
                    style={{ color: "white" }}
                    className="fa fa-sharp fa-solid fa-circle-exclamation"
                  ></i>
                  <ErrorMessage>4 to 24 characters.</ErrorMessage>
                  <ErrorMessage>Must begin with a letter.</ErrorMessage>
                  <ErrorMessage>
                    Letters, numbers, underscores, hyphens allowed.
                  </ErrorMessage>
                </ErrorContainer>
              ) : (
                ""
              )}
            </FormBodyFields>
            <FormBodyFields>
              <span>
                Password.
                {validMatch && matchPwd ? (
                  <i
                    style={{ color: "green" }}
                    className="fa fa-solid fa-check"
                  ></i>
                ) : (
                  ""
                )}
              </span>
              <Input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="enter password"
              />
              {pwdFocus && !validPwd ? (
                <ErrorContainer>
                  <i
                    style={{ color: "white" }}
                    className="fa fa-sharp fa-solid fa-circle-exclamation"
                  ></i>
                  <ErrorMessage>8 to 24 characters.</ErrorMessage>
                  <ErrorMessage>
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                  </ErrorMessage>
                  <ErrorMessage>
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </ErrorMessage>
                </ErrorContainer>
              ) : (
                ""
              )}
            </FormBodyFields>
            <FormBodyFields>
              <span>
                Confirm Password.
                {validMatch && matchPwd ? (
                  <i
                    style={{ color: "green" }}
                    className="fa fa-solid fa-check"
                  ></i>
                ) : (
                  ""
                )}
                {validMatch || !matchPwd ? (
                  ""
                ) : (
                  <i
                    style={{ color: "red" }}
                    className="fa fa-solid fa-xmark"
                  ></i>
                )}
              </span>
              <Input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                placeholder="re-enter password"
              />
              {matchFocus && !validMatch ? (
                <ErrorContainer>
                  <i
                    style={{ color: "white" }}
                    className="fa fa-sharp fa-solid fa-circle-exclamation"
                  ></i>

                  <ErrorMessage>
                    Must match the first password input field.
                  </ErrorMessage>
                </ErrorContainer>
              ) : (
                ""
              )}
            </FormBodyFields>
          </FormBody>
          <ButtonContainer>
            <Button onClick={formSubmissionHandler}>Register User</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  width: 400px;
  box-shadow: 0px 0px 6px 0px black;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
`;

const FormHeader = styled.div`
  margin-bottom: 30px;
`;

const FormTitle = styled.div`
  font-size: 30px;
  font-weight: bolder;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const FormBodyFields = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
`;

const ErrorContainer = styled.div`
  background-color: black;
  z-index: 10;
  padding: 10px;
  position: absolute;
  top: 60px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px black;
`;

const ErrorMessage = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
  z-index: 15;
`;

const IconContiner = styled.div``;
