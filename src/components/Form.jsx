import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: {
        normal: 'normal',
        raro: 'raro',
        muitoRaro: 'muito raro',
      },
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
    console.log('clicou!');
    this.setState((prevState) => ({
      isSaveButtonDisabled: !prevState.isSaveButtonDisabled,
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare: { normal, raro, muitoRaro },
      cardTrunfo, isSaveButtonDisabled } = this.state;
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
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
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="raridadeCard">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridadeCard"
            type="select"
            onChange={ this.onInputChange }
          >
            <option value={ normal }>{normal}</option>
            <option value={ raro }>{raro}</option>
            <option value={ muitoRaro }>{muitoRaro}</option>
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
            onChange={ this.onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ this.onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

export default Form;
