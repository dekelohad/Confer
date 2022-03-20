import { css } from '@emotion/core';

const FooterStyles = css`
  width: 100%;
  padding: 100px 0 0 0;
  background: #111343;
  /* background: red; */
  position: relative;

  /* Scroll up styling */
  .scroll-up-btn {
    position: fixed;
    text-align: center;
    height: 45px;
    width: 42px;
    font-size: 30px;
    /* background: #5361ff; */
    background: purple;

    color: #fff;
    right: 30px;
    bottom: 10px;
    border-radius: 6px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .divContainer1 {
    background-color: orange;
    width: 200px;
    height: 150px;
  }

  .scroll-up-btn.show {
    bottom: 30px;
    opacity: 1;
  }
  .scroll-up-btn:hover {
    filter: brightness(90%);
  }
`;

export default FooterStyles;
