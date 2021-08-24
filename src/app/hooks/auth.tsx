import React, { createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { getToken, getUser, loggedIn, loggedOut } from '../services/auth';

interface AuthContextData {
  user: User | null;
  signIn(user: User): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface User {
  name: string;
  email: string;
}

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState(() => {
    const user = getUser();
    const token = getToken();

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = async ({ name, email }: User) => {
    const { data } = await api.post("/user/signin", { name, email });

    const { user, token } = data;
    
    loggedIn(token, user);

    history.push('/home');
  }

  const signOut = async () => {
    loggedOut();
    setData({});
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
