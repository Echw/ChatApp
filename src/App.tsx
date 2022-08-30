import React from 'react';
import { Route, Routes } from 'react-router';
import ChatSection from './pages/ChatSection';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import MessageList from './pages/MessageList';
import StartNewChatSection from './pages/StartNewChatSection';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messageList" element={<MessageList />} />
        <Route path="/messageList/ChatSection" element={<ChatSection />} />
        <Route
          path="/messageList/StartNewChat"
          element={<StartNewChatSection />}
        />
        <Route path="/friendsList" element={<FriendsList />} />
      </Routes>
    </>
  );
}

export default App;
