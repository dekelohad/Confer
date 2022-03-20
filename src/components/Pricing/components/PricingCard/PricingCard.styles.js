import { css } from '@emotion/core';

const PricingCardStyles = css`
  width: 100%;
  max-width: 330px;
  background: #fff;
  padding: 50px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: transform 400ms ease-in-out;

  .cardTitle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #df42b1;
    border-radius: 0 0 5px 5px;
    width: 160px;
    text-align: center;
    padding: 8px;
    font-weight: 600;
    color: #fff;
  }

  .priceCurrency {
    font-size: 2.2rem;
    display: inline-block;
  }

  img {
    margin: 30px 0 0 0;
  }
  h2 {
    font-size: 60px;
    color: #111343;
    sup {
      font-size: 32px;
    }
  }
  .btn {
    width: 100%;
  }
  .info {
    padding: 30px 8px 0 8px;
    width: 100%;
    text-align: center;

    p {
      color: #5d5e8d;
      font-size: 15px;

      &:not(:last-of-type) {
        margin-bottom: 14px;
      }

      &:last-of-type {
        padding-right: 22px;
      }

      i {
        color: #df42b1;
        margin-right: 4px;
      }
    }
  }
  @media (max-width: 800px) {
    max-width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 801px) and (max-width: 1168px) {
    max-width: 58%;
    margin: 25px auto;
  }
`;

export default PricingCardStyles;
