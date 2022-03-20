/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Title, Container } from '../GlobalComponents';
import { SponsorCard, Testimonial } from './components';
import { TestimonialOne, TestimonialTwo } from '../../assets/images';
import SponsorsStyles from './Sponsors.styles';

const Sponsors = () => (
  <section css={SponsorsStyles} className="sponsors">
    <Title subtitle="PARTNERS & SPONSORS" title="OFFICIAL SPONSOR" />
    <Container>
      <SponsorCard />
    </Container>
    <Container>
      <Testimonial
        testimonialName="Sarah Svartz"
        testimonialImg={TestimonialOne}
        testimonialContent={`There are lots of related things to learn and to deepen into, thats why
        Confer gather the world-class practitioners to share their experience
        and to bring you the newest knowledge and the most interesting cases.`}
        testimonialRole={'Senior Front End Engineer'}
      />
      <Testimonial
        testimonialName="Jessica Nor"
        testimonialImg={TestimonialTwo}
        testimonialContent={`There are lots of related things to learn and to deepen into, thats why
        Confer gather the world-class practitioners to share their experience
        and to bring you the newest knowledge and the most interesting cases.`}
        testimonialRole={'Senior Full Stack Engineer'}
      />
    </Container>
  </section>
);

export default Sponsors;
