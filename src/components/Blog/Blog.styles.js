import { css } from '@emotion/core';
import { BlogBg } from '../../assets/images';

const BlogStyles = css`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background: url('${BlogBg}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 60px 0 0 0;
  }
  @media (max-width: 826px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 827px) and (max-width: 1168px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default BlogStyles;
