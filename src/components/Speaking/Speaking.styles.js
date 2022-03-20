import { css } from '@emotion/core';
import { SpeakingBg } from '../../assets/images';

const SpeakingStyles = css`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background: url('${SpeakingBg}') no-repeat center/cover;
  .container {
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttonWrap {
    display: flex;
    justify-content: center;
    .btn {
      background: transparent;
      border: 1px solid #fff;
      position: relative;
      &:hover {
        background: #df42b1;
        border: 1px solid #df42b1;
      }
    }
  }
  @media (max-width: 810px) {
    .container {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
`;

export default SpeakingStyles;
