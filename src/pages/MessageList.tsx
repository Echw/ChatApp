import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import OneMessageOnList from '../components/OneMessageOnList';

const MessageList = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBarContainer>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </SearchBarContainer>
        <button>
          <AiOutlinePlus />
        </button>
      </SearchWrapper>
      <List>
        <OneMessageOnList />
        <OneMessageOnList />
        <OneMessageOnList />
        <OneMessageOnList />
      </List>
    </Wrapper>
  );
};

export default MessageList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #294245;
`;

const SearchWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  input {
    height: 3rem;
    width: 14rem;
    border-radius: 5rem;
    padding-left: 3rem;
    font-weight: 300;
    font-size: 1.5rem;
    background-color: #1f2b2c;
    border: none;
    color: white;
    :focus {
      border: none;
      color: white;
    }
  }

  button {
    width: 3rem;
    height: 3rem;
    background-color: #1f2b2c;
    color: white;
    border: 0;
    border-radius: 50%;
    font-size: 1.5rem;
    color: #828282;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
      color: white;
    }
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  color: #828282;
  top: 0.7rem;
  left: 1rem;
  font-size: 1.5rem;
`;
