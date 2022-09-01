import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from '../components/user.png';
import Layout from './../components/Layout';

const MyProfileEdit = () => {
  return (
    <Layout>
      <ProfileWrapper>
        <NameSection>
          <h2>My Profile</h2>
          <div>
            <ActivitiIcon></ActivitiIcon>
            <span>online</span>
          </div>
        </NameSection>
        <DetailsSection>
          <InfoWrapper>
            <Img src={userIcon} alt="" />
            <ProfileInfo>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Janek Kowalski" />
              </div>
              <div>
                <label htmlFor="adress">Adress</label>
                <input
                  type="text"
                  name="adress"
                  placeholder="Pacanowo 99, Pacanowo"
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="Polska" />
              </div>
              <div>
                <label htmlFor="number">Number</label>
                <input type="number" name="number" placeholder="666 666 666" />
              </div>
            </ProfileInfo>
            <Button>
              <StyledLink to="/profile">Save</StyledLink>
            </Button>
          </InfoWrapper>
        </DetailsSection>
      </ProfileWrapper>
    </Layout>
  );
};

export default MyProfileEdit;

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

    input {
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      border: 0.2rem solid #a9a9a9;
    }
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

const StyledLink = styled(Link)`
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
`;
