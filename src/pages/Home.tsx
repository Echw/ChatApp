import React from 'react';
import styled from 'styled-components';
import ChatSection from '../components/ChatSection';
import Sidebar from '../components/Sidebar';
import MessageList from './../components/MessageList';

const Home = () => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <MessageList />
      <ChatSection />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
`;
