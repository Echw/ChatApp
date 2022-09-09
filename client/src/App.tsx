import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Logout from './pages/Logout';
import { UserContextProvider } from './contexts/UserContext';
import socketIO from 'socket.io-client';
import Chat from './pages/Chat';

const socket = socketIO('http://localhost:4000/');

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
        {/* <Route
          path="/chat/ChatSection"
          element={<ChatSection socket={socket} />}
        /> */}
        {/* <Route
          path="/messageList/StartNewChat"
          element={<StartNewChatSection socket={socket} />}
        /> */}
        {/* <Route path="/friendsList" element={<FriendsList />} /> */}
        {/* <Route path="/profile" element={<MyProfile />} /> */}
        {/* <Route path="/profileedit" element={<MyProfileEdit />} /> */}
        <Route path="/goodbye" element={<Logout />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
