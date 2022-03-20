/** @jsx jsx */
import { jsx } from '@emotion/core';
import TitleStyles from './Title.styles';

const Title = ({ subtitle, title }) => (
  <div css={TitleStyles} className="title">
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </div>
);

export default Title;
