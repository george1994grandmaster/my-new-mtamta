import { FC } from 'react';
import { Card } from './cards';
import { CloseBtn } from '../assets/svg-format-components';

interface PopupProps {
  condition: boolean;
  selectedCard: Card;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ condition, selectedCard, onClose }) => {
  const closePopup = () => {
    onClose && onClose(); // Call the onClose function if it's provided
  };

  return (
    <div className={`popup-wrapper ${condition ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          <CloseBtn />
        </button>
        {selectedCard && (
          <div className="d-flex ai-center">
            <div className="popup-img-col">
              <img src={selectedCard.image} alt="popup-img" />
            </div>
            <div className="popup-text-col">
              <h5 className="popup-title title dark fw-bold">{selectedCard.title}</h5>
              <p className="popup-text text dark fw-light">{selectedCard.completeText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;