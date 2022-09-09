import { Socket } from 'socket.io-client';
import Layout from '../components/Layout';
import styled from 'styled-components';
import OneFriendOnList from '../components/OneFriendOnList';
import { useEffect, useState } from 'react';
import ChatSection from './ChatSection';

interface ChatProps {
  socket: Socket;
}

export type User = {
  userName: string;
  id: string;
  socketID: string;
};

const Chat = (props: ChatProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log('siurak');
    props.socket.on('newUserResponse', (data) => setUsers(data));
  }, [props.socket, users]);

  return (
    <Layout>
      <Wrapper>
        <ListWrapper>
          <ListTitle>Chat List</ListTitle>
        </ListWrapper>
        <List>
          {users.map((user) => (
            <OneFriendOnList key={user.socketID} user={user} />
          ))}
        </List>
      </Wrapper>
      <ChatSection socket={props.socket}></ChatSection>
    </Layout>
  );
};

export default Chat;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #294245;
  width: 20%;
`;

const ListWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const ListTitle = styled.h2`
  color: white;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* overflow-y: scroll; */
  /* flex: 1 0 0; */
`;
