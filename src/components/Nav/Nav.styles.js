import { css } from '@emotion/core';

const NavStyles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.7);
  #burgerMenu {
    display: none;
    cursor: pointer;
    color: #fff;
  }
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1024px) {
    min-height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    #burgerMenu {
      display: block;
    }
    .container {
      padding: 20px 40px;
      width: 100%;
      max-width: 360px;
      min-height: 100vh;
      position: absolute;
      left: -500px;
      top: 0;
      background: blue;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      z-index: 10;
      background: rgba(0, 0, 0, 1);
      transition: left 700ms ease-in-out;
      &.hidden {
        left: 0;
      }
      .wrapper {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default NavStyles;
