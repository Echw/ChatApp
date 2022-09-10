import React from 'react';
import styled from 'styled-components';
import { User } from '../types/User';
import UserAvatar from './UserAvatar';

interface OneFriendProps {
  user: User;
}

const OneFriendOnList = (props: OneFriendProps) => {
  return (
    <Wrapper>
      <UserAvatarDiv avatar={props.user.avatar} />
      <h3>{props.user.userName}</h3>
    </Wrapper>
  );
};

export default OneFriendOnList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: hidden;

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

const UserAvatarDiv = styled(UserAvatar)`
  width: auto;
`;
