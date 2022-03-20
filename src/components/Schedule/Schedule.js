/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Container, Title } from '../GlobalComponents';
import { ScheduleNavItem, ScheduleCard } from './components';
import {
  ScheduleOne,
  ScheduleTwo,
  ScheduleThree,
  ScheduleFour,
} from '../../assets/images';
import { getNextYear } from '../../utils/dates';
import ScheduleStyles from './Schedule.styles';

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState('Monday');
  const nextYear = getNextYear();

  return (
    <section css={ScheduleStyles} className="schedule" id="pages">
      <Title subtitle="OUR TIMETABLE" title="SCHEDULE PLAN" />
      <div className="scheduleNav">
        <ScheduleNavItem
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          itemName="Sunday"
          itemFullDate={`January 14, ${nextYear}`}
        />
        <ScheduleNavItem
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          itemName="Monday"
          itemFullDate={`January 15, ${nextYear}`}
        />
        <ScheduleNavItem
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          itemName="Tuesday"
          itemFullDate={`January 16, ${nextYear}`}
        />
      </div>
      <Container>
        {currentDay === 'Sunday' && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOne}
              scheduleTitle="React Hooks"
              scheduleDesc="by David Roben / Confer CEO"
              scheduleDate={`2pm - 3pm , January 14, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleTwo}
              scheduleTitle="Advanced React Hooks"
              scheduleDesc="by Josh Nuar / Confer CTO"
              scheduleDate={`3pm - 4pm , January 14, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleThree}
              scheduleTitle="State Managment"
              scheduleDesc="by Donna Rosen / Front End"
              scheduleDate={`5pm  - 6pm , January 14, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleFour}
              scheduleTitle="Advanced State Managment"
              scheduleDesc="by Michael mro / Senior Front End"
              scheduleDate={`7pm - 8pm , January 14, ${nextYear}`}
            />
          </React.Fragment>
        )}
        {currentDay === 'Monday' && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleTwo}
              scheduleTitle="Testing Your Hooks"
              scheduleDesc="by Donna Rosen /Senior Front End"
              scheduleDate={`1pm - 3pm , January 15, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleThree}
              scheduleTitle="Testing Your State"
              scheduleDesc="by Martha Burke /Senior Front End"
              scheduleDate={`3pm - 5pm , January 15, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleFour}
              scheduleTitle="Testing Your App"
              scheduleDesc="by David Roben /Senior Front End"
              scheduleDate={`5pm - 7pm , January 15, ${nextYear}`}
            />
          </React.Fragment>
        )}
        {currentDay === 'Tuesday' && (
          <React.Fragment>
            <ScheduleCard
              scheduleImg={ScheduleOne}
              scheduleTitle="React Performance"
              scheduleDesc="by David Roben"
              scheduleDate={`1pm - 3am , January 16, ${nextYear}`}
            />
            <ScheduleCard
              scheduleImg={ScheduleFour}
              scheduleTitle="Advanced Performance"
              scheduleDesc="by  Josh Nuar"
              scheduleDate={`3pm - 5pm , January 16, ${nextYear}`}
            />
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

export default Schedule;
