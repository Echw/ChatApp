import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext({
  allUsers: [] as User[],
});

interface ProviderProps {
  children: React.ReactNode;
}

export type User = {
  result: {
    name: {
      first: string;
      last: string;
    };
    gender: string;
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      country: string;
    };
    phone: string;
    picture: {
      medium: string;
    };
  }[];
};

export const UserContextProvider = (props: ProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const url = 'https://randomuser.me/api/';

  useEffect(() => {
    axios.get(url).then((res) => {
      const users = res.data;
      setUsers(users);
      console.log(res);
    });
  }, []);

  return (
    <UserContext.Provider value={{ allUsers: users }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
