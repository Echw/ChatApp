import React from 'react';
import styled from 'styled-components';
import userIcon from './user.png';

const OneFriend = () => {
  return (
    <Wrapper>
      <img src={userIcon} alt="" />
      <h3>Janek Kowalski</h3>
    </Wrapper>
  );
};

export default OneFriend;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1.5rem;
  overflow: hidden;
  padding-left: 2rem;
  :hover {
    cursor: pointer;
    background-color: #1f2b2c;
  }

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: #a9a9a9;
    object-fit: cover;
  }

  h3 {
    color: white;
    font-weight: 400;
    margin: 0;
  }
`;
