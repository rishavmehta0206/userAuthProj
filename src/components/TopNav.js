import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Container>
      <Wrapper>
        <RightContainer>
          <LinkContainer>
            <Links to="/about">About</Links>
          </LinkContainer>
          <LinkContainer>
            <Links to="/blog">Blog</Links>
          </LinkContainer>
          <LinkContainer>
            <Links to="/contact">Contact</Links>
          </LinkContainer>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default TopNav;

const Container = styled.div`
  height: 50px;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  margin-left: 20px;
  padding: 10px;
  width: auto;
`;

const Links = styled(NavLink)`
  text-decoration: none;
`;
