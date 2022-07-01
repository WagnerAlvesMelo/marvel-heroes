import md5 from 'md5';
import createAuthHash from './create-hash';

describe('CreateAuthHash', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('should throw an error if envs are not defined', () => {
    const testRegExp = /^[a-f0-9]{32}$/gi;

    process.env.REACT_APP_API_PRIVATE_KEY = '';
    process.env.REACT_APP_API_PUBLIC_KEY = '';

    expect(() => createAuthHash(new Date().getTime())).toThrowError(
      'Impossible to create auth hash because envs are not defined',
    );
  });

  it('should create an authentication hash to marvel api', () => {
    const testRegExp = /^[a-f0-9]{32}$/gi;
    const hash = createAuthHash(new Date().getTime());

    expect(hash).toMatch(testRegExp);
  });
});
