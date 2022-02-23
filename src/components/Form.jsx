import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      atributte: 0,
      atributte2: 0,
      atributte3: 0,
      img: '',
      raridade: {
        normal: 'Normal',
        raro: 'Raro',
        muitoRaro: 'Muito Raro',
      },
      checkSuper: false,
    };
  }

  handleCardChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, description, atributte, atributte2, atributte3,
      img, raridade: { normal, raro, muitoRaro }, checkSuper } = this.state;
    return (
      <form>
        <label htmlFor="cardName">
          Nome da Carta:
          <input
            data-testid="name-input"
            id="cardName"
            name="name"
            type="text"
            value={ name }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição da Carta:
          <input
            data-testid="description-input"
            id="cardDescription"
            name="description"
            type="textarea"
            value={ description }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="atributteCard">
          1° Atributo da Carta:
          <input
            data-testid="attr1-input"
            id="atributteCard"
            name="atributte"
            type="number"
            value={ atributte }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="atributte2Card">
          2º Atributo da Carta:
          <input
            data-testid="attr2-input"
            id="atributte2Card"
            name="atributte2"
            type="number"
            value={ atributte2 }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="atributte3Card">
          3º Atributo da Carta:
          <input
            data-testid="attr3-input"
            id="atributte3Card"
            name="atributte3"
            type="number"
            value={ atributte3 }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="image">
          Imagem da Carta:
          <input
            data-testid="image-input"
            id="image"
            name="img"
            type="text"
            value={ img }
            onChange={ this.handleCardChange }
          />
        </label>
        <label htmlFor="raridadeCard">
          Raridade:
          <select
            data-testid="rare-input"
            id="raridadeCard"
            onChange={ this.handleCardChange }
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
            name="checkSuper"
            type="checkbox"
            checked={ checkSuper }
            onChange={ this.handleCardChange }
          />
        </label>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
