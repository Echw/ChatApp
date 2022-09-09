import React from 'react';
import styled from 'styled-components';
import { User } from '../contexts/UserContext';
import { BigHead } from '@bigheads/core';

interface OneFriendProps {
  user: User;
  selectUser: (user: User) => void;
}

const OneFriendOnList = (props: OneFriendProps) => {
  return (
    <Wrapper>
      <BigHead />
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

  svg {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
  }

  h3 {
    color: white;
    font-weight: 400;
    margin: 0;
  }
`;
