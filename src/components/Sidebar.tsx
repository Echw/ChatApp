import React from 'react';
import styled from 'styled-components';
import { BsChatDotsFill } from 'react-icons/bs';
import { BsFillGearFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import userIcon from './user.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Wrapper>
      <ProfileImgWrapper>
        <ActivityIcon />
        <Img src={userIcon} />
        <SidebarIcons>
          <StyledLink to="/messageList">
            <BsChatDotsFill />
          </StyledLink>
          <StyledLink to="/friendsList">
            <FaUserFriends />
          </StyledLink>

          <StyledLink to="/profile">
            <BsFillGearFill />
          </StyledLink>
        </SidebarIcons>
      </ProfileImgWrapper>

      <StyledLink to="/goodbye">
        <RiLogoutBoxRFill />
      </StyledLink>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #1f2b2c;
`;

const StyledLink = styled(Link)`
  background: transparent;
  border-left: 0.3rem solid transparent;
  padding: 0.5rem 0;
  font-size: 2rem;
  color: #828282;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: white;
    cursor: pointer;
    border-left: 0.3rem solid #0098a5;
    background-color: #294245;
  }
`;

const Img = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #a9a9a9;
`;
const ProfileImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ActivityIcon = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 1.5rem;
  border: 0.1rem solid white;
  background-color: #00ff00;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;
const SidebarIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem;
  padding-top: 4rem;
`;
