import { css } from '@emotion/core';

const FooterContainerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  .footerCard {
    width: 100%;
    max-width: 220px;
    color: #9293bc;
    h2 {
      color: #fff;
      margin-bottom: 14px;
    }
    &.firstPart {
      img {
        padding: 8px 0 0 0;
      }
      > p {
        margin: 14px 0;
        font-size: 14px;
        line-height: 1.7;
      }

      .socialWrap {
        display: flex;
        .socialIcon {
          display: flex;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid #9293bc;
          cursor: pointer;
          margin-right: 10px;
          transition: all 500ms ease-in-out;
          &:hover {
            background: #5d5e8d;
            border: 1px solid #5d5e8d;
          }
          i {
            color: #fff;
            margin: auto;
          }
        }
      }
    }
    &.secondPart {
      p {
        font-weight: 400;
        font-size: 15px;
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.thirdPart {
      max-width: 250px;
      p {
        text-decoration: none;
        color: #9293bc;
        transition: color 500ms ease-in-out;

        &:hover {
          color: #fff;
          cursor: pointer;
        }
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.forthPart {
      display: flex;
      flex-direction: column;
      .link {
        cursor: pointer;
        text-transform: capitalize;
        &:not(:first-of-type) {
          margin-top: 14px;
        }
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      &.firstPart,
      &.secondPart,
      &.thirdPart,
      &.forthPart {
        max-width: 100%;
        margin: 14px 0;
      }
      &.third {
        a {
          display: block;
        }
      }
    }
  }

  @media (min-width: 641px) and (max-width: 1140px) {
    flex-wrap: wrap;
    .footerCard {
      &.firstPart,
      &.secondPart,
      &.thirdPart,
      &.forthPart {
        max-width: 47%;
        margin: 14px 0;
      }
    }
  }
`;
export default FooterContainerStyles;
