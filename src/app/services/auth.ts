interface User {
  id: number;
  name: string;
  email: string;
}

export const TOKEN_KEY = 'ReservarVeiculo';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loggedIn = (token: string, user: User) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(`${TOKEN_KEY}_USER`, JSON.stringify(user));
};

export const getUser = () => localStorage.getItem(`${TOKEN_KEY}_USER`);

export const loggedOut = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(`${TOKEN_KEY}_USER`);
};
