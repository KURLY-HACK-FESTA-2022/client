import userStorage from './userStorage';

export function isLogin() {
  const user = userStorage.get();

  if (!user) return false;

  const { token } = user;
  return !!token;
}
