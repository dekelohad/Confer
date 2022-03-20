/** @jsx jsx */
import { jsx } from '@emotion/core';
import TestimonialStyles from './Testimonial.styles';

const Testimonial = ({
  testimonialName,
  testimonialImg,
  testimonialContent,
  testimonialRole,
}) => {
  return (
    <div css={TestimonialStyles} className="testimonial">
      <p>{testimonialContent}</p>
      <div className="testimonialInfo">
        <img src={testimonialImg} alt="testimonial" />
        <div className="testimonialDesc">
          <p>{testimonialName}</p>
          <span>{testimonialRole}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
