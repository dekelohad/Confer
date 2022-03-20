import { css } from '@emotion/core';

const SponsorsStyles = css`
  width: 100%;
  padding: 100px 0;
  background: #151853;
  .title {
    p {
      color: #df42b1;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 60px 0 120px 0;
    &:last-of-type {
      justify-content: space-between;
      padding: 0;
    }
  }
  @media (min-width: 701px) and (max-width: 1020px) {
    .container {
      justify-content: space-between;
    }
  }
  @media (max-width: 1168px) {
    .container {
      padding: 60px 0;
    }
  }
`;

export default SponsorsStyles;
