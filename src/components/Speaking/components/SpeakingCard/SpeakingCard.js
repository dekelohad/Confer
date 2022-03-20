/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Overlay, Icon } from '../../../GlobalComponents';
import { socialIcons } from './data';
import SpeakingCardStyles from './SpeakingCard.styles';

const SpeakingCard = ({ speakerName, speakerDesc, speakerImg }) => (
  <div
    style={{ background: `url(${speakerImg}) no-repeat center/cover` }}
    css={SpeakingCardStyles}
    className="speakingCard"
  >
    <div className="socials">
      {socialIcons.map((socialIcon) => (
        <Icon
          iconName={socialIcon.iconName}
          className="socialIcon"
          key={socialIcon.id}
          iconFamily={socialIcon.iconFamily}
        />
      ))}
    </div>
    <Overlay
      overlay="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0) 100%)"
      opacity="1"
    />
    <p>{speakerName}</p>
    <span>{speakerDesc}</span>
  </div>
);

export default SpeakingCard;
