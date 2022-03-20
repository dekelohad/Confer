/** @jsx jsx */
import { jsx } from '@emotion/core';
import BlogCardStyles from './BlogCard.styles';

const BlogCard = ({ blogImg, blogTitle, blogSpeaker, blogDate }) => {
  return (
    <div css={BlogCardStyles} className="blogCard">
      <div
        style={{ background: `url(${blogImg}) no-repeat center/cover` }}
        className="blogImg"
      ></div>
      <div className="blogInfo">
        <h3>{blogTitle}</h3>
        <div className="blogDate">
          <span>
            <i className="far fa-clock fa-sm"></i>
            {blogDate}
          </span>
          <span>
            <i className="far fa-user fa-sm"></i>
            {blogSpeaker}
          </span>
        </div>
        <p>
          A three-day conference on all things React, gathering Front-end and
          Full-stack engineers across the globe in the cloud.
        </p>
      </div>
      <div className="iconWrap">
        <div className="circle">
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
