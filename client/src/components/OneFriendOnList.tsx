import React from 'react';
import styled from 'styled-components';
import { User } from '../contexts/UserContext';

interface OneFriendProps {
  user: User;
  selectUser: (user: User) => void;
}

const OneFriendOnList = (props: OneFriendProps) => {
  return (
    <Wrapper onClick={() => props.selectUser(props.user)}>
      <img src={props.user.picture.medium} alt="" />
      <h3>
        {props.user.name.first} {props.user.name.last}
      </h3>
    </Wrapper>
  );
};

export default OneFriendOnList;

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