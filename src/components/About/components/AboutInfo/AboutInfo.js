/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../../GlobalComponents';
import { AboutBg } from '../../../../assets/images';
import AboutInfoStyles from './AboutInfo.styles';

const AboutInfo = ({ firstTitle, secondTitle, content }) => (
  <div css={AboutInfoStyles} className="aboutInfo">
    <div className="aboutDesc">
      <span>{firstTitle}</span>
      <h2>{secondTitle}</h2>
      <p>{content}</p>
      <Button btnTitle="Interested" />
    </div>
    <img src={AboutBg} alt="about" />
  </div>
);

export default AboutInfo;
