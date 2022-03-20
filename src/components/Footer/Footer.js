/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Title } from '../GlobalComponents';
import { FooterContainer } from './components';
import FooterStyles from './Footer.styles';

const Footer = () => (
  <footer css={FooterStyles}>
    <Title />
    <Container>
      <FooterContainer footerContent="Confer is the biggest and the most advanced conference related to React." />
    </Container>
  </footer>
);

export default Footer;
