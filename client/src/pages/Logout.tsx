import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../components/8741.svg';

const Logout = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={img} alt="img" />
      </ImgWrapper>
      <h1>You are now logged out!</h1>
      <Button>
        <h2>Do you want to log in?</h2>
        <StyledLink to="/">Log In</StyledLink>
      </Button>
    </Wrapper>
  );
};

export default Logout;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dde0e0;
  color: #828282;
`;
const ImgWrapper = styled.div`
  width: 30rem;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    border: 0;
    border-radius: 5rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    color: white;
    background-color: #294245;

    :hover {
      cursor: pointer;
      background-color: #1f2b2c;
    }
  }
`;

const StyledLink = styled(Link)`
  border: 0;
  border-radius: 5rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  color: white;
  background-color: #294245;

  :hover {
    cursor: pointer;
    background-color: #1f2b2c;
  }
`;
