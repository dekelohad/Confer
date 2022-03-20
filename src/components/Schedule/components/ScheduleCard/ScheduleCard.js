/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../../GlobalComponents';
import ScheduleCardStyles from './ScheduleCard.styles';

const ScheduleCard = ({
  scheduleImg,
  scheduleTitle,
  scheduleDesc,
  scheduleDate,
  scheduleLocation = 'Marina Bay Sands Hotel , Singapore.',
}) => (
  <div css={ScheduleCardStyles} className="scheduleCard">
    <div className="cardWrapper">
      <div className="infoWrapper">
        <img src={scheduleImg} alt="schedule" />
        <div className="info">
          <h3>{scheduleTitle}</h3>
          <p>{scheduleDesc}</p>
        </div>
      </div>
      <div className="about">
        <p>
          <i className="far fa-clock"></i>
          {scheduleDate}
        </p>
        <p>
          <i className="fas fa-map"></i>
          {scheduleLocation}
        </p>
      </div>
    </div>
    <Button btnTitle="View more" />
  </div>
);

export default ScheduleCard;
