import { css } from '@emotion/core';

const ScheduleStyles = css`
  width: 100%;
  background: #151853;
  padding: 100px 0;
  .scheduleNav {
    display: flex;
    justify-content: center;
  }
  .container {
    min-height: 634px;
  }
  @media (max-width: 970px) {
    .scheduleNav {
      padding: 14px 0 0 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1168px) {
    .scheduleNav {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export default ScheduleStyles;
