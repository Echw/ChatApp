import React from 'react';
import styled from 'styled-components';
import { BsChatDotsFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';
import { useUserContext } from '../contexts/UserContext';

const Sidebar = () => {
  const { defaultAvatar } = useUserContext();

  return (
    <Wrapper>
      <ProfileImgWrapper>
        <UserAvatar avatar={defaultAvatar}></UserAvatar>
        <SidebarIcons>
          <StyledLink to="/chat">
            <BsChatDotsFill />
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

const ProfileImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
