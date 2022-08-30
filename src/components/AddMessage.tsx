import React from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import styled from 'styled-components';

const AddMessage = () => {
  return (
    <NewMessageSection>
      <button>
        <BsFillEmojiSmileFill />
      </button>
      <input type="text" placeholder="Type message..." />
      <button>
        <IoMdSend />
      </button>
    </NewMessageSection>
  );
};

export default AddMessage;

const NewMessageSection = styled.div`
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
