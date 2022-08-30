import React from 'react';
import styled from 'styled-components';
import userIcon from './user.png';

const OutgoingMessage = () => {
  return (
    <Wrapper>
      <BubbleWrapper>
        <ChatBubble>
          <span>
            Culpa doloremque enim commodi velit at dolore dolor praesentium
            doloribus quod explicabo modi
          </span>
          <div></div>
        </ChatBubble>
        <TimeWrapper>
          <span>06-06</span>
          <span>14:15 PM</span>
        </TimeWrapper>
      </BubbleWrapper>
      <img src={userIcon} alt="" />
    </Wrapper>
  );
};

export default OutgoingMessage;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin: 3rem 2rem;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: #a9a9a9;
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
  background-color: #5ebe5e;
  width: 30rem;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;

  div {
    position: absolute;
    top: 0;
    right: -1rem;
    background-color: #5ebe5e;
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
