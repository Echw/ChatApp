import React from 'react';
import styled from 'styled-components';
import { BsChatDotsFill } from 'react-icons/bs';
import { BsFillGearFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import userIcon from './user.png';

const Sidebar = () => {
  return (
    <Wrapper>
      <ProfileImgWrapper>
        <ActivityIcon />
        <Img src={userIcon} />
      </ProfileImgWrapper>
      <SidebarIcons>
        <button>
          <BsChatDotsFill />
        </button>
        <button>
          <FaUserAlt />
        </button>
        <button>
          <FaUserFriends />
        </button>
        <button>
          <BsFillGearFill />
        </button>
      </SidebarIcons>
      <button>
        <RiLogoutBoxRFill />
      </button>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100vh;
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #1f2b2c;
  button {
    background: transparent;
    border: 0.3rem solid transparent;
    font-size: 2rem;
    color: #828282;
    width: 100%;

    :hover {
      color: white;
      cursor: pointer;
      border-left: 0.3rem solid #0098a5;
      background-color: #294245;
    }
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
`;
const ActivityIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0.5rem;
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
`;
