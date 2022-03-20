/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Overlay } from '../GlobalComponents';
import { Nav } from '../../components';
import { HeroInfo } from './components';
import HeroStyles from './Hero.styles';

const Hero = () => (
  <section css={HeroStyles} className="hero" id="home">
    <Overlay overlay="#000" opacity=".4" />
    <Nav />
    <Container>
      <HeroInfo
        titleFirstPart="React"
        titleSecondPart="CONFERENCE"
        content="The Marina Bay Sands Hotel , Singapore"
      />
    </Container>
  </section>
);

export default Hero;
