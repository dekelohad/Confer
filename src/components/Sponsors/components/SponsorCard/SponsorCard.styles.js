import { css } from '@emotion/core';

const SponsorCardStyles = css`
  width: 100%;
  max-width: 25%;
  height: 240px;
  border: 1px solid #444675;
  display: flex;
  img {
    margin: auto;
    display: block;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 500ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 700px) {
    max-width: 50%;
  }
  @media (min-width: 701px) and (max-width: 1020px) {
    max-width: 32%;
    margin: 10px 0;
    &:nth-child(7),
    &:nth-child(8) {
      max-width: 49%;
    }
  }
`;

export default SponsorCardStyles;
