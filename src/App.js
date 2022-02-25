import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => this.buttonChanges());
  }

  buttonChanges = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const justStrings = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardImage.length > 0 && cardRare.length > 0;
    const maxSum = 210;
    const maxAttr = 91;
    const minAttr = 0;
    const attrsMax = Number(cardAttr1) < maxAttr && Number(cardAttr2) < maxAttr
    && Number(cardAttr3) < maxAttr;
    const attrsMin = Number(cardAttr1) >= minAttr && Number(cardAttr2) >= minAttr
    && Number(cardAttr3) >= minAttr;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;
    if (justStrings && attrsMax && attrsMin && sum) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  // Ajuda de Luá Octaviano para entender que o requisito 5 deveria ficar apenas em 1 if.

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo, hasTrunfo } = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: {
        cardName: [cardName],
        cardDescription: [cardDescription],
        cardAttr1: [cardAttr1],
        cardAttr2: [cardAttr2],
        cardAttr3: [cardAttr3],
        cardImage: [cardImage],
        cardRare: [cardRare],
        cardTrunfo: [cardTrunfo],
        hasTrunfo: [hasTrunfo],
      },
    });
  }

  render() {
    return (
      <main>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </main>
    );
  }
}

// Ajuda de Danillo Gonçalves e Luá Octaviano para entender o que se passava no Card.

export default App;
