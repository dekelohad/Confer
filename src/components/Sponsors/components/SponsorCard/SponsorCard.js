/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { logos } from './data';
import SponsorCardStyles from './SponsorCard.styles';

const SponsorCard = () => {
  return (
    <React.Fragment>
      {logos.map((logo, index) => (
        <div key={index} css={SponsorCardStyles} className="sponsorCard">
          <img src={logo} alt={'sponsorLogo'} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default SponsorCard;
