/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-scroll';
import { links } from './data';
import MenuStyles from './Menu.styles';

const Menu = () => {
  return (
    <div className="menu" css={MenuStyles}>
      {links.map((link) => (
        <Link key={link.id} to={link.name} offset={80} activeClass="active">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
