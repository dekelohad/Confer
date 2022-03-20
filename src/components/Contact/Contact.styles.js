import { css } from '@emotion/core';

const ContactStyles = css`
  width: 100%;
  padding: 100px 0;
  background: #151853;
  .title {
    p {
      color: #df42b1;
    }
  }
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default ContactStyles;
