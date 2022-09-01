import React from 'react';
import { Route, Routes } from 'react-router';
import ChatSection from './pages/ChatSection';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import MessageList from './pages/MessageList';
import MyProfile from './pages/MyProfile';
import StartNewChatSection from './pages/StartNewChatSection';
import MyProfileEdit from './pages/MyProfileEdit';

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
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/profileedit" element={<MyProfileEdit />} />
      </Routes>
    </>
  );
}

export default App;
