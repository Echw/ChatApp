import React from 'react';
import { Route, Routes } from 'react-router';
import ChatSection from './pages/ChatSection';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import MessageList from './pages/MessageList';
import MyProfile from './pages/MyProfile';
import StartNewChatSection from './pages/StartNewChatSection';
import MyProfileEdit from './pages/MyProfileEdit';
import Logout from './pages/Logout';
import { UserContextProvider } from './contexts/UserContext';
import socketIO from 'socket.io-client';

const socket = socketIO('http://localhost:4000/');

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/messageList" element={<MessageList socket={socket} />} />
        <Route
          path="/messageList/ChatSection"
          element={<ChatSection socket={socket} />}
        />
        <Route
          path="/messageList/StartNewChat"
          element={<StartNewChatSection socket={socket} />}
        />
        <Route path="/friendsList" element={<FriendsList />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/profileedit" element={<MyProfileEdit />} />
        <Route path="/goodbye" element={<Logout />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
