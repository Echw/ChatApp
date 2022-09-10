import React, { useState } from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { Socket } from 'socket.io-client';
import styled from 'styled-components';
import Emoji from './Emoji';
import { IEmojiData } from 'emoji-picker-react';

interface AddMessageProps {
  socket: Socket;
}

const AddMessage = (props: AddMessageProps) => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    if (message.trim() && localStorage.getItem('userName')) {
      props.socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${props.socket.id}${Math.random()}`,
        socketID: props.socket.id,
        time: new Date().toLocaleString(),
      });
    }
    setMessage('');
  };

  const onEmojiClick = (event: any, emojiObject: IEmojiData) => {
    setMessage((prevValue) => prevValue + emojiObject.emoji);
  };

  const showEmojiOnClick = () => setShowEmoji((prevValue) => !prevValue);

  return (
    <NewMessageSection onSubmit={handleSendMessage}>
      <button onClick={showEmojiOnClick}>
        <BsFillEmojiSmileFill />
      </button>
      {showEmoji && <Emoji onEmojiClick={onEmojiClick} />}
      <input
        type="text"
        placeholder="Type message..."
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <button type="submit">
        <IoMdSend />
      </button>
    </NewMessageSection>
  );
};

export default AddMessage;

const NewMessageSection = styled.form`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 1rem;
  z-index: 1000;

  button {
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: #c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input {
    padding: 0 2rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    color: #828282;
    ::placeholder {
      color: #dde0e0;
    }
  }
`;
