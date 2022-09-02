import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Navigate, useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGINUSER } from "../redux/authActions";

const Login = () => {
  // const reducerData = useSelector(state=>state.auth)
  // console.log(reducerData.user)

  const dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = useMemo(() => {
    // location.state ? return location.state?.from?.pathname : return "/";
    if (location.state) {
      return location.state?.from?.pathname;
    } else {
      return "/";
    }
  }, [location.state?.from?.pathname]);
  console.log(from);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const loginUserDetails = {
      username: user,
      password: pwd,
    };
    LOGINUSER(dispatch, loginUserDetails);
    // navigate(from, { replace: true });
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Form>
            <FormHeader>
              <FormTitle>Login.</FormTitle>
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
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </FormBodyFields>
              <FormBodyFields>
                <span>Password.</span>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </FormBodyFields>
            </FormBody>
            <ButtonContainer>
              <Button onClick={formSubmissionHandler}>Login</Button>
            </ButtonContainer>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;

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
