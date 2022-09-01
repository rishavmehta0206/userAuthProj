import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container>
      <Wrapper>
        <Logo>Abcd.</Logo>
        {user ? (
          <LinkContainer>
            <Links>Welcome {user.username}</Links>
          </LinkContainer>
        ) : (
          <LinkContainer>
            <Links>
              <i className="fa fa-solid fa-key"></i>
              <Link type="login" to="/login">
                Login
              </Link>
            </Links>
            <Links type="register">
              <i className="fa fa-sharp fa-solid fa-user"></i>
              <Link type="register" to="/register">
                Register
              </Link>
            </Links>
          </LinkContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 80px;
  width: 100%;
  top: 0;
  position: sticky;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Links = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
