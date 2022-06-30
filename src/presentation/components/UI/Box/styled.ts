import styled, { css } from 'styled-components';
import { BoxProps } from 'presentation/components/UI/Box/index';

const wrapperModifiers = {
  container: css`
    width: 100%;
  `,
};

const Wrapper = styled.div<Pick<BoxProps, 'container'>>`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${({ container }) => !!container && wrapperModifiers.container}
`;

export default Wrapper;
