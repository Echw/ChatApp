import React from 'react';
import styled from 'styled-components';
import { Message } from '../pages/ChatSection';
import { User } from '../types/User';
import UserAvatar from './UserAvatar';

interface IncomingMessageProps {
  message: Message;
  user: User;
}

const IncomingMessage = (props: IncomingMessageProps) => {
  return (
    <Wrapper>
      <UserAvatarDiv avatar={props.user.avatar} />
      <BubbleWrapper>
        <ChatBubble>
          <span>{props.message.text}</span>
          <div></div>
        </ChatBubble>
        <TimeWrapper>
          <span>{props.message.time}</span>
        </TimeWrapper>
      </BubbleWrapper>
    </Wrapper>
  );
};

export default IncomingMessage;

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 3rem 2rem;

  svg {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
  }
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: #a9a9a9;
  padding-top: 0.5rem;
`;

const ChatBubble = styled.div`
  display: flex;
  background-color: white;
  width: 30rem;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: -1rem;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    width: 3rem;
    height: 2rem;
    border-radius: 20% 0% 0% 100%;
  }

  span {
    color: #828282;
    font-size: 1rem;
    z-index: 100;
    line-height: 1.75rem;
  }
`;
const UserAvatarDiv = styled(UserAvatar)`
  width: auto;
`;
