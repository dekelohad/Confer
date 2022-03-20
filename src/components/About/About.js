/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container } from '../GlobalComponents';
import { AboutInfo, AboutDate } from './components';
import AboutStyles from './About.styles';

const About = () => (
  <section css={AboutStyles} className="about">
    <Container>
      <AboutInfo
        firstTitle={'ABOUT CONFERENCE'}
        secondTitle={'WELCOME TO The React Summit Conference'}
        content={`A three-day conference on all things React, gathering Front-end an Full-stack engineers across the globe in the cloud. To help you stay up-to-date on the latest React tech, we're coming back with a new remote
        gig on October 14-16, 2020. Mark your calendars for the biggest virtual
        event for the React community. Besides the conference talks delivered by
        well-known pros, be prepared for awesome MCs and a number of virtual
        networking activities, interactive entertainment, and engaging
        challenges for all participants.`}
      />
      <AboutDate />
    </Container>
  </section>
);

export default About;
