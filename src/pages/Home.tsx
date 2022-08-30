import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import MessageList from './MessageList';
import StartNewChatSection from './StartNewChatSection';

const Home = () => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <MessageList />
      <StartNewChatSection></StartNewChatSection>
      {/* <ChatSection /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
`;
