/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../../GlobalComponents';
import HeroInfoStyles from './HeroInfo.styles';

const HeroInfo = ({ titleFirstPart, titleSecondPart, content }) => (
  <div css={HeroInfoStyles} className="info">
    <h2>
      <span>{titleFirstPart}</span> <br /> {titleSecondPart}
    </h2>
    <p>{content}</p>
    <Button btnTitle="More information" />
  </div>
);

export default HeroInfo;
