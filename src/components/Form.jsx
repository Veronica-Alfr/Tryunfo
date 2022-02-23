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
    };
  }

  handleCardChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, description, atributte, atributte2, atributte3, img } = this.state;
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
      </form>
    );
  }
}

export default Form;
