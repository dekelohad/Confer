import { css } from '@emotion/core';
import { HeroBg } from '../../assets/images';

const HeroStyles = css`
  width: 100%;
  min-height: 100vh;
  background: url('${HeroBg}') no-repeat center/cover;
  display: flex;
  transition: all 600ms ease-in-out;
  .container {
    margin: auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 720px) {
    background-position: 10% 100%;
  }
`;

export default HeroStyles;
