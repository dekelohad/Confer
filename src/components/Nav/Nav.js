/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Container, Button, Logo } from '../GlobalComponents';
import { Menu } from './components';
import { LogoBg } from '../../assets/logos';
import NavStyles from './Nav.styles';

const Nav = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav css={NavStyles}>
      <Container isOpened={isOpened}>
        <Logo source={LogoBg} logoName='Confer logo' />
        <div className="wrapper">
          <Menu />
          <Button btnTitle="Get tickets" />
        </div>
      </Container>
      <i
        onClick={() => setIsOpened(!isOpened)}
        id="burgerMenu"
        className={isOpened ? 'fas fa-times' : 'fas fa-bars'}
      ></i>
    </nav>
  );
};

export default Nav;
