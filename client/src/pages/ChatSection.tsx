import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddMessage from '../components/AddMessage';
import IncomingMessage from '../components/IncomingMessage';
import OutgoingMessage from '../components/OutgoingMessage';
import { Socket } from 'socket.io-client';
import { useUserContext } from '../contexts/UserContext';

interface ChatSectionProps {
  socket: Socket;
}

export type Message = {
  text: string;
  name: string;
  id: string;
  socketID: string;
  time: string;
};

const ChatSection = (props: ChatSectionProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { users } = useUserContext();

  useEffect(() => {
    props.socket.on('messageResponse', (data) => {
      setMessages([...messages, data]);
    });
  }, [props.socket, messages]);

  return (
    <Wrapper>
      <NameSection>
        <h2>Your Chat</h2>
        <div>
          <ActivitiIcon></ActivitiIcon>
          <span>online</span>
        </div>
      </NameSection>
      <MessagesSection>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <OutgoingMessage
              user={users.find((user) => user.socketID === message.socketID)!}
              key={message.id}
              message={message}
            ></OutgoingMessage>
          ) : (
            <IncomingMessage
              user={users.find((user) => user.socketID === message.socketID)!}
              key={message.id}
              message={message}
            ></IncomingMessage>
          )
        )}
      </MessagesSection>
      <AddMessage socket={props.socket} />
    </Wrapper>
  );
};

export default ChatSection;

const Wrapper = styled.div`
  background-color: #dde0e0;
  width: 100%;
  display: flex;
  flex-direction: column;
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

const MessagesSection = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  flex: 1 0 0;
`;
