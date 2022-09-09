import React from 'react';
import styled from 'styled-components';
import { BigHead } from '@bigheads/core';
import { Message } from '../pages/ChatSection';

interface OutgoingMessageProps {
  message: Message;
}

const OutgoingMessage = (props: OutgoingMessageProps) => {
  return (
    <Wrapper>
      <BubbleWrapper>
        <ChatBubble>
          <span>{props.message.text}</span>
          <div></div>
        </ChatBubble>
        <TimeWrapper>
          <span>{props.message.time}</span>
        </TimeWrapper>
      </BubbleWrapper>
      <BigHead />
    </Wrapper>
  );
};

export default OutgoingMessage;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
  background-color: #599dbf;
  width: 30rem;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;

  div {
    position: absolute;
    top: 0;
    right: -1rem;
    background-color: #599dbf;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transform: scaleX(-1);
    width: 3rem;
    height: 2rem;
    border-radius: 20% 0% 0% 100%;
  }

  span {
    color: white;
    font-size: 1rem;
    z-index: 100;
    line-height: 1.75rem;
  }
`;
