/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Container, Overlay, Title } from '../GlobalComponents';
import { PricingCard } from './components';
import { IconOne, IconTwo, IconThree } from '../../assets/icons';
import PricingStyles from './Pricing.styles';

const Pricing = () => {
  const [activeCardIndex, setActiveCardIndex] = useState('');
  return (
    <section css={PricingStyles} className="pricing">
      <Overlay
        overlay="linear-gradient(120deg, #505add 0%, #df42b1 100%)"
        opacity=".9"
      />
      <Title subtitle="CHOOSE A TICKET" title="TICKET PRICING" />
      <Container>
        <PricingCard
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
          cardImg={IconOne}
          cardTitle="3 DAY PASS"
          cardPrice={359}
          cardIndex={1}
        />
        <PricingCard
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
          cardImg={IconTwo}
          cardTitle="FULL PASS"
          cardPrice={499}
          cardIndex={2}
        />
        <PricingCard
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
          cardImg={IconThree}
          cardTitle="GROUP PASS"
          cardPrice={599}
          cardIndex={3}
        />
      </Container>
    </section>
  );
};

export default Pricing;
