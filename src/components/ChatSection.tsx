import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatSection = () => {
  return (
    <Wrapper>
      <NameSection>
        <h2>Janek Kowalski</h2>
        <div>
          <ActivitiIcon></ActivitiIcon>
          <span>online</span>
        </div>
      </NameSection>
      <MessageSection>
        <Message></Message>
      </MessageSection>
    </Wrapper>
  );
};

export default ChatSection;

const Wrapper = styled.div`
  background-color: #dde0e0;
  width: 100%;
`;
const NameSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  padding: 3rem;
  border-bottom: 0.1rem solid #c2c2c2;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #1f2b2c;
    margin: 0;
    line-height: 100%;
  }
  span {
    color: #828282;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;
const ActivitiIcon = styled.div`
  border: 0.1rem solid white;
  background-color: #00ff00;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;

const MessageSection = styled.div``;
