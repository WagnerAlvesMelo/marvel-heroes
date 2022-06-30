import md5 from 'md5';

export default function createAuthHash(timestamp: number) {
  const { REACT_APP_API_PRIVATE_KEY, REACT_APP_API_PUBLIC_KEY } = process.env;

  return md5(timestamp + (REACT_APP_API_PRIVATE_KEY || '') + (REACT_APP_API_PUBLIC_KEY || ''));
}
