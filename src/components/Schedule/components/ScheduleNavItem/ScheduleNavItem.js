/** @jsx jsx */
import { jsx } from '@emotion/core';
import ScheduleNavItemStyles from './ScheduleNavItem.styles';

const ScheduleNavItem = ({
  itemName,
  itemFullDate,
  currentDay,
  setCurrentDay,
}) => {
  return (
    <div
      style={{
        background: currentDay === itemName ? '#5d5e8d' : '',
        color: currentDay === itemName ? '#fff' : '',
      }}
      onClick={() => setCurrentDay(itemName)}
      css={ScheduleNavItemStyles}
      className="navItem"
    >
      <p>{itemName}</p>
      <span>{itemFullDate}</span>
    </div>
  );
};

export default ScheduleNavItem;
