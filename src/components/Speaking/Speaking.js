/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Title, Container, Button, Overlay } from '../GlobalComponents';
import { SpeakingCard } from './components';
import {
  SpeakerOne,
  SpeakerTwo,
  SpeakerThree,
  SpeakerFour,
  SpeakerFive,
  SpeakerSix,
} from '../../assets/images';
import SpeakingStyles from './Speaking.styles';

const Speaking = () => (
  <section css={SpeakingStyles} className="speaking" id="speakers">
    <Overlay
      overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
      opacity=".9"
    />
    <Title subtitle="OUR SPEAKINGS" title="WHO’S SPEAKING" />
    <Container>
      <SpeakingCard
        speakerName="Catherine Murray"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerOne}
      />
      <SpeakingCard
        speakerName="Anthony Anderson"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerTwo}
      />
      <SpeakingCard
        speakerName="Ariana Quattle"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerThree}
      />
      <SpeakingCard
        speakerName="Carrie  McDonough"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerFour}
      />
      <SpeakingCard
        speakerName="Christina Stubbs"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerFive}
      />
      <SpeakingCard
        speakerName="Benjamin Dominguez"
        speakerDesc="Senior Front End Engineer"
        speakerImg={SpeakerSix}
      />
    </Container>
    <div className="buttonWrap">
      <Button btnTitle="View all speaker" />
    </div>
  </section>
);

export default Speaking;
