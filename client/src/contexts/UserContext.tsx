import React, { createContext, useContext, useState } from 'react';
import { Avatar } from '../types/Avatar';
import { User } from '../types/User';

const UserContext = createContext({
  get userName(): string {
    throw new Error('UserContext not defined');
  },
  setUserName: (value: string) => {},
  get defaultAvatar(): Avatar {
    throw new Error('UserContext not defined');
  },
  setDefaultAvatar: (avatar: Avatar) => {},
  get users(): User[] {
    throw new Error('UserContext not defined');
  },
  setUsers: (users: User[]) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = (props: ProviderProps) => {
  const [userName, setUserName] = useState('');
  const [defaultAvatar, setDefaultAvatar] = useState<Avatar>({
    body: 'chest',
    clothing: 'shirt',
    clothingColor: 'white',
    eyes: 'normal',
    facialHair: 'none',
    hair: 'none',
    hairColor: 'blonde',
    mouth: 'serious',
    skinTone: 'light',
  });
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        defaultAvatar,
        setDefaultAvatar,
        users,
        setUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
