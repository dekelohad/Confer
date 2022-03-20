/** @jsx jsx */
import { jsx } from '@emotion/core';
import ContainerStyles from './Container.styles';

const Container = ({ children, isOpened }) => (
  <div
    css={ContainerStyles}
    className={(isOpened ? 'hidden' : '') + ' container'}
  >
    {children}
  </div>
);

export default Container;
