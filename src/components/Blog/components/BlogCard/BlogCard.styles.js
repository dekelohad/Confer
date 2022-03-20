import { css } from '@emotion/core';

const BlogCardStyles = css`
  width: 100%;
  max-width: 344px;
  background: #fff;
  border-radius: 8px;
  .blogImg {
    width: 100%;
    height: 220px;
  }
  .blogInfo {
    text-align: center;
    padding: 30px;
    position: relative;
    h3 {
      color: #000;
      transition: color 300ms ease-in-out;
      font-size: 21px;
      font-weight: 500;
      line-height: 1;
      cursor: pointer;
      &:hover {
        color: #df42b1;
      }
    }
    .blogDate {
      padding: 10px 0 0 0;
      span {
        font-size: 14px;
        color: #9293bc;
        font-weight: 500;
        transition: color 300ms ease-in-out;
        cursor: pointer;
        &:hover {
          color: #df42b1;
        }
        &:first-of-type {
          margin-right: 20px;
        }
        i {
          margin-right: 8px;
        }
      }
    }
    p {
      color: #5d5e8d;
      line-height: 1.7;
      margin: 14px 0 0 0;
      font-weight: 400;
    }
  }
  .iconWrap {
    display: flex;
    justify-content: center;
    .circle {
      cursor: pointer;
      margin-bottom: -20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #fff;
      background: linear-gradient(120deg, #505add 0%, #df42b1 100%);
      display: flex;
      i {
        margin: auto;
        color: #fff;
      }
    }
  }
  @media (max-width: 826px) {
    max-width: 100%;
    &:nth-child(2) {
      margin: 50px 0;
    }
  }
  @media (min-width: 827px) and (max-width: 1168px) {
    max-width: 48%;
    &:last-of-type {
      margin: 40px 0 0 0;
    }
  }
`;

export default BlogCardStyles;
