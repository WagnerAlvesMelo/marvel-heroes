// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'reflect-metadata';
import '@testing-library/jest-dom';
import 'react-toastify/dist/ReactToastify.css';
import MockServices from 'presentation/hooks/service/mocks/service';

jest.mock('presentation/hooks/service/service.tsx', () => MockServices);
