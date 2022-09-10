import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Socket } from 'socket.io-client';
import AvatarPlayground from './../components/AvatarPlayground';
import { useUserContext } from '../contexts/UserContext';

interface HomeProps {
  socket: Socket;
}

const Home = (props: HomeProps) => {
  const navigate = useNavigate();
  const { defaultAvatar, setDefaultAvatar, setUserName, userName } =
    useUserContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('userName', userName);
    props.socket.emit('newUser', {
      userName,
      socketID: props.socket.id,
      avatar: defaultAvatar,
    });

    navigate('/chat');
  };

  const changeAvatar = (part: string, value: string) => {
    setDefaultAvatar({
      ...defaultAvatar,
      [part]: value,
    });
  };

  return (
    <Layout>
      <Wrapper>
        <JoinWrapper>
          <h1>Join Chat</h1>
          <AvatarPlayground
            avatar={defaultAvatar}
            onChangeAvatar={changeAvatar}
          />
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              minLength={6}
              name="username"
              id="username"
              placeholder="Username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Button>
              <StyledLink>Sign in</StyledLink>
            </Button>
          </Form>
        </JoinWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dde0e0;
  width: 100%;
  color: #828282;
`;

const JoinWrapper = styled.div`
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 5rem;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  input {
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 0.2rem solid #a9a9a9;
    font-size: 1.5rem;
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

const StyledLink = styled.button`
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
