import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import { Socket } from 'socket.io-client';
import styled from 'styled-components';
import AddMessage from '../components/AddMessage';

interface StartNewChatSectionProps {
  socket: Socket;
}

const StartNewChatSection = (props: StartNewChatSectionProps) => {
  return (
    <Wrapper>
      <Icon>
        <IoIosSend />
      </Icon>
      <h1> Start Your first conversation!</h1>
      <AddFriend>
        Add Friend
        <AiOutlinePlus />
      </AddFriend>
      <AddMessage socket={props.socket} />
    </Wrapper>
  );
};

export default StartNewChatSection;

const Wrapper = styled.div`
  background-color: #dde0e0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #1f2b2c;
    margin: 0;
    line-height: 100%;
    padding-bottom: 2rem;
  }
`;

const Icon = styled.div`
  svg {
    font-size: 10rem;
    color: #5ebe5e4b;
  }
`;

const AddFriend = styled.button`
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
