import React from 'react';
import styled from 'styled-components';
import userIcon from './user.png';

const OneMessageOnList = () => {
  return (
    <Wrapper>
      <img src={userIcon} alt="" />
      <InfoWrapper>
        <h3>Janek Kowalski</h3>
        <span>Voluptatum id consequatur excepturi aperiam vitae</span>
      </InfoWrapper>
      <MessagesNumber>
        <span>6</span>
      </MessagesNumber>
    </Wrapper>
  );
};

export default OneMessageOnList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1.5rem;
  overflow: hidden;
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
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    color: white;
    font-weight: 400;
    margin: 0;
  }
  span {
    color: #828282;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
  }
`;
const MessagesNumber = styled.div`
  background-color: #17ca17;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 500;
    color: white;
  }
`;
