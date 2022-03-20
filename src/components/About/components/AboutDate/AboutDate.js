/** @jsx jsx */
import { jsx } from '@emotion/core';
import AboutDateTimer from './AboutDateTimer';
import AboutDateStyles from './AboutDate.styles';

const AboutDate = () => {
  return (
    <div css={AboutDateStyles} className="aboutDate">
      <div className="dateInfo">
        <span>CONFERENCE DATE</span>
        <h3>COUNT EVERY SECOND UNTIL THE EVENT</h3>
      </div>
      <AboutDateTimer deadline={`December, 28,2022`} />
    </div>
  );
};

export default AboutDate;
