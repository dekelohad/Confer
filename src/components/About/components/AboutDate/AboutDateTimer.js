import React, { useState, useEffect } from 'react';
import { timeUnits } from './data';

const AboutDateTimer = ({ deadline }) => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [months, setMonths] = useState('');

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const months = Math.floor(time / (1000 * 60 * 60 * 24) / 12);
      setMonths(months);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => getTimeUntil(deadline), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [deadline]);

  const AboutDateCards = timeUnits.map((timeUnit) => {
    const { unitName, id } = timeUnit;
    let unitOfTime;
    switch (unitName) {
      case 'months':
        unitOfTime = months;
        break;
      case 'days':
        unitOfTime = days;
        break;
      case 'hours':
        unitOfTime = hours;
        break;
      case 'minutes':
        unitOfTime = minutes;
        break;
      case 'seconds':
        unitOfTime = seconds;
        break;
      default:
        break;
    }

    return (
      <div key={id} className="dateCard">
        <h2>{unitOfTime}</h2>
        <p className="unitName">{unitName}</p>
      </div>
    );
  });

  return <div className="cardContainer">{AboutDateCards}</div>;
};
export default AboutDateTimer;
