import { Socket } from 'socket.io-client';
import Layout from '../components/Layout';
import styled from 'styled-components';

import OneFriendOnList from '../components/OneFriendOnList';
import FriendProfile from '../components/FriendProfile';
import { User, useUserContext } from '../contexts/UserContext';
import { useState } from 'react';
import ChatSection from './ChatSection';

interface ChatProps {
  socket: Socket;
}

const Chat = (props: ChatProps) => {
  const { allUsers } = useUserContext();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <Layout>
      <Wrapper>
        <ListWrapper>
          <ListTitle>Chat List</ListTitle>
        </ListWrapper>
        {allUsers.length > 0 && (
          <List>
            {allUsers.map((user) => (
              <OneFriendOnList user={user} selectUser={setSelectedUser} />
            ))}
          </List>
        )}
      </Wrapper>
      <FriendProfile user={selectedUser} />
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
