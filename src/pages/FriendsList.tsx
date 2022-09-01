import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import OneFriendOnList from '../components/OneFriendOnList';
import FriendProfile from '../components/FriendProfile';
import { User, useUserContext } from '../contexts/UserContext';

const FriendsList = () => {
  const { allUsers } = useUserContext();

  return (
    <Layout>
      <Wrapper>
        <SearchWrapper>
          <SearchBarContainer>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </SearchBarContainer>
          <StyledLink to="/messageList/StartNewChat">
            <AiOutlinePlus />
          </StyledLink>
        </SearchWrapper>
        <List>
          {allUsers.map((user) => (
            <OneFriendOnList user={user} />
          ))}
        </List>
      </Wrapper>
      <FriendProfile />
    </Layout>
  );
};

export default FriendsList;

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
`;
const StyledLink = styled(Link)`
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
