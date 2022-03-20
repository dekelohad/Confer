import { css } from '@emotion/core';
import { PricingBg } from '../../assets/images';

const PricingStyles = css`
  width: 100%;
  padding: 100px 0;
  background: url('${PricingBg}') no-repeat center/cover;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 800px) {
    .container {
      justify-content: center;
    }
  }
  @media (max-width: 1168px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default PricingStyles;
