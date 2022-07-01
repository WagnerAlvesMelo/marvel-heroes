import md5 from 'md5';

export default function createAuthHash(timestamp: number) {
  const { REACT_APP_API_PRIVATE_KEY, REACT_APP_API_PUBLIC_KEY } = process.env;

  if (REACT_APP_API_PRIVATE_KEY && REACT_APP_API_PUBLIC_KEY) {
    return md5(timestamp + REACT_APP_API_PRIVATE_KEY + REACT_APP_API_PUBLIC_KEY);
  }

  throw new Error('Impossible to create auth hash because envs are not defined');
}
