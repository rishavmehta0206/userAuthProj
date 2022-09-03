import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const UnAuthorized = () => {
  return (
    <Container>
      <Title>User Not Authorized.</Title>
      <Links to="/">{`<< go back to home.`}</Links>
    </Container>
  )
}

export default UnAuthorized

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.h1``;

const Links = styled(Link)`
  font-size: 20px;
  text-decoration: none;
`;