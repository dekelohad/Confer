/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../../GlobalComponents';
import { cards } from './data';
import PricingCardStyles from './PricingCard.styles';

const PricingCard = ({
  cardTitle,
  cardImg,
  cardPrice,
  cardPriceCurrency = '$',
  cardIndex,
  activeCardIndex,
  setActiveCardIndex,
}) => {
  return (
    <div
      style={{ transform: activeCardIndex === cardIndex && 'scale(1.1)' }}
      onMouseEnter={() => setActiveCardIndex(cardIndex)}
      css={PricingCardStyles}
      className="pricingCard"
    >
      <p className="cardTitle">{cardTitle}</p>
      <img src={cardImg} alt="price" />
      <h2>
        <span className="priceCurrency">{cardPriceCurrency}</span>
        {cardPrice}
      </h2>
      <Button btnTitle="Get tickets" />
      <div className="info">
        {cards.map((card) => {
          const { id, content } = card;
          return (
            <p key={id}>
              <i className={`fas fa-check`}></i> {content}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
