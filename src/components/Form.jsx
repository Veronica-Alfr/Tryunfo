import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: {
  //       normal: 'normal',
  //       raro: 'raro',
  //       muitoRaro: 'muito raro',
  //     },
  //     cardTrunfo: false,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };
  // }

  // onInputChange = ({ target }) => {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // onSaveButtonClick = () => {
  //   console.log('clicou!');
  //   this.setState((prevState) => ({
  //     isSaveButtonDisabled: !prevState.isSaveButtonDisabled,
  //   }));
  // }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome da Carta:
          <input
            data-testid="name-input"
            id="name"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição da Carta:
          <input
            data-testid="description-input"
            id="description"
            name="cardDescription"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributte1Card">
          1° Atributo da Carta:
          <input
            data-testid="attr1-input"
            id="atributte1Card"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributte2Card">
          2º Atributo da Carta:
          <input
            data-testid="attr2-input"
            id="atributte2Card"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributte3Card">
          3º Atributo da Carta:
          <input
            data-testid="attr3-input"
            id="atributte3Card"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem da Carta:
          <input
            data-testid="image-input"
            id="image"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridadeCard">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridadeCard"
            type="select"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="superTrunfo">
          Carta Super Trunfo?
          <input
            data-testid="trunfo-input"
            id="superTrunfo"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
