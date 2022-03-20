import { css } from '@emotion/core';

const SpeakingCardStyles = css`
  width: 100%;
  max-width: 340px;
  height: 370px;
  margin: 20px 0;
  padding: 22px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .socials {
      top: 0;
    }
  }
  .socials {
    background: #df42b1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 18px;
    border-radius: 0 0 0 10px;
    position: absolute;
    transition: top 600ms ease-in-out;
    top: -200px;
    right: 0;
    i {
      color: #fff;
      cursor: pointer;
      margin: 7px 0;
    }
  }
  p,
  span {
    position: relative;
  }
  p {
    color: #fff;
    font-size: 20px;
  }
  span {
    color: #df42b1;
  }
  @media (max-width: 810px) {
    max-width: 100%;
    height: 430px;
  }
  @media (min-width: 811px) and (max-width: 1169px) {
    max-width: 47.7%;
  }
`;

export default SpeakingCardStyles;
