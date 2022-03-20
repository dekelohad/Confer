/** @jsx jsx */
import { jsx } from '@emotion/core';
import OverlayStyles from './Overlay.styles';

const Hero = ({ overlay, opacity }) => (
  <div
    style={{ background: overlay, opacity: opacity }}
    css={OverlayStyles}
    className="overlay"
  ></div>
);

export default Hero;
