import { css } from '@emotion/core';

const MenuStyles = css`
  padding: 20px 0;
  a {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    transition: color 600ms ease-in-out;
    font-size: 16px;
    font-weight: 500;
    margin-right: 56px;
    cursor: pointer;
    &:hover,
    &.active {
      color: #df42b1;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    a {
      width: 100%;
      font-size: 22px;
      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  }
`;

export default MenuStyles;
