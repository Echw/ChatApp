import React, { createContext, useContext, useState } from 'react';
import { Avatar } from '../types/Avatar';

const UserContext = createContext({
  get userName(): string {
    throw new Error('UserContext not defined');
  },
  setUserName: (value: string) => {},
  get defaultAvatar(): Avatar {
    throw new Error('UserContext not defined');
  },
  setDefaultAvatar: (avatar: Avatar) => {},
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

  return (
    <UserContext.Provider
      value={{ userName, setUserName, defaultAvatar, setDefaultAvatar }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
