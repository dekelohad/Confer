/** @jsx jsx */
import { jsx } from '@emotion/core';
import ButtonStyles from './Button.styles';

const Button = ({ btnTitle }) => (
  <button className="btn" css={ButtonStyles}>
    {btnTitle}
    <i className="fas fa-long-arrow-alt-right"></i>
  </button>
);

export default Button;
