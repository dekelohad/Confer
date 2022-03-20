/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-scroll';
import { Logo, Icon } from '../../../GlobalComponents';
import { LogoBg } from '../../../../assets/logos';
import { links, conferences, socialIcons, icons } from './data';
import FooterContainerStyles from './FooterContainer.styles';

const FooterContainer = ({
  footerContent,
  firstTitle = 'Contact',
  secondTitle = 'Conferences',
  thirdTitle = 'Navigation',
}) => {
  return (
    <div css={FooterContainerStyles} className="footerContainer">
      <div className="footerCard firstPart">
        <Logo source={LogoBg} logoName="Confer footer logo" />
        <p>{footerContent}</p>
        <div className="socialWrap">
          {socialIcons.map((socialIcon) => (
            <Icon
              iconName={socialIcon.iconName}
              className="socialIcon"
              key={socialIcon.id}
              iconFamily={socialIcon.iconFamily}
            />
          ))}
        </div>
      </div>

      <div className="footerCard secondPart">
        <h2>{firstTitle}</h2>
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            iconFamily={icon.iconFamily}
            iconName={icon.iconName}
          >
            {icon.childrenText}
          </Icon>
        ))}
      </div>

      <div className="footerCard thirdPart">
        <h2>{secondTitle}</h2>
        {conferences.map((conference) => {
          const { id, conferenceName } = conference;
          return <p key={id}>{conferenceName}</p>;
        })}
      </div>
      <div className="footerCard forthPart">
        <h2>{thirdTitle}</h2>
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.name}
            activeClass="active"
            className="link"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterContainer;
