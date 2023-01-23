import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, buttonRemoveCard } = this.props;

    const TrunfoTrueOrNot = cardTrunfo
      ? <p data-testid="trunfo-card">Super Trunfo</p>
      : '';

    return (
      <div key={ cardName } className="container-infos">
        <p value={ cardName } data-testid="name-card">{cardName}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" value={ cardDescription }>{cardDescription}</p>
        <p data-testid="attr1-card" value={ cardAttr1 }>{cardAttr1}</p>
        <p data-testid="attr2-card" value={ cardAttr2 }>{cardAttr2}</p>
        <p data-testid="attr3-card" value={ cardAttr3 }>{cardAttr3}</p>
        <p data-testid="rare-card" value={ cardRare }>{cardRare}</p>
        {TrunfoTrueOrNot}
        <div>
          <button
            data-testid="delete-button"
            type="button"
            onClick={ buttonRemoveCard }
            value={ cardName }
          >
            Excluir

          </button>
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  buttonRemoveCard: PropTypes.func.isRequired,
};

export default Deck;
