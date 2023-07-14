import { FC, useState } from 'react';
import { newsCards } from '../utils/data';
import Btn from './button';
import Popup from './popup';

export interface Card {
  id: number;
  title: string;
  text: string;
  completeText: string;
  image: string;
}

const Cards: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Card>({} as Card);

  const openPopup = (card: Card) => {
    setIsOpened(true);
    setSelectedCard(card);
    document.body.classList.add('shadow');
  };

  const closePopup = () => {
    setIsOpened(false);
    document.body.classList.remove('shadow');
  };

  return (
    <div className="cards-container">
      <Popup selectedCard={selectedCard} condition={isOpened} onClose={closePopup} />
      {newsCards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-img-shine">
            <img src={card.image} alt="card-img" />
          </div>
          <div className="card-body bg-light">
            <div className="card-text-content">
              <h5 className="card-title title dark fw-bold">{card.title}</h5>
              <p className="card-text text dark fw-light">{card.text}</p>
              <Btn
                color="#fff"
                text="read more"
                space="8px 15px"
                handleClick={() => openPopup(card)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;