import React from 'react';
import styled from 'styled-components';
import { User } from '../contexts/UserContext';

interface FriendProfileProps {
  user: User | null;
}

const FriendProfile = (props: FriendProfileProps) => {
  if (props.user === null) return <></>;

  return (
    <ProfileWrapper>
      <NameSection>
        <h2>
          {props.user.name.first} {props.user.name.last}
        </h2>
        <div>
          <ActivitiIcon></ActivitiIcon>
          <span>online</span>
        </div>
      </NameSection>
      <DetailsSection>
        <InfoWrapper>
          <Img src={props.user.picture.large} alt="" />
          <ProfileInfo>
            <div>
              <span>Name</span>
              <h3>
                {props.user.name.first} {props.user.name.last}
              </h3>
            </div>
            <div>
              <span>Adress</span>
              <h4>
                {' '}
                {props.user.location.street.name}{' '}
                {props.user.location.street.number} {props.user.location.city}
              </h4>
            </div>
            <div>
              <span>Country</span>
              <h4>{props.user.location.country}</h4>
            </div>
            <div>
              <span>Number</span>
              <h4>{props.user.phone}</h4>
            </div>
          </ProfileInfo>
          <Button>
            <button>Add to Friend</button>
            <button>Remove from Friends</button>
          </Button>
        </InfoWrapper>
      </DetailsSection>
    </ProfileWrapper>
  );
};

export default FriendProfile;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dde0e0;
  width: 100%;
  gap: 2rem;
`;
const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const NameSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  padding: 3rem;
  border-bottom: 0.1rem solid #c2c2c2;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #1f2b2c;
    margin: 0;
    line-height: 100%;
  }
  span {
    color: #828282;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;
const ActivitiIcon = styled.div`
  border: 0.1rem solid white;
  background-color: #00ff00;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;
const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 5rem;
  padding: 2rem 5rem;

  display: flex;
  align-items: center;
  gap: 3rem;
  width: 60%;
  z-index: 1000;
`;

const Img = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background-color: #a9a9a9;
  object-fit: cover;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #a9a9a9;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    margin: 0;
    color: #828282;
  }
  h4 {
    margin: 0;
    color: #828282;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    border: 0;
    border-radius: 5rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    color: white;
    background-color: #294245;

    :hover {
      cursor: pointer;
      background-color: #1f2b2c;
    }
  }
`;
