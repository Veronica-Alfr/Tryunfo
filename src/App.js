import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
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
      cardList: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => this.validation());
  }

  validation = () => {
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
      cardAttr3, cardTrunfo, cardList } = this.state;
    cardList.push({ cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo });
    this.setState({
      filterName: '',
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }, this.validationHasTrunfo);
  }

  // Ajuda de Leonardo Araújo para entender o funcionamento do cardList sem sobrescrever outros cards.

  validationHasTrunfo = () => {
    const { cardList } = this.state;
    const validate = cardList.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({ hasTrunfo: validate });
  }

  // Ajuda de Danillo Gonçalves para validação do cardTrunfo e hasTrunfo.

  buttonRemoveCard = ({ target }) => {
    const { cardList } = this.state;
    const filterCards = cardList.filter((card) => card.cardName !== target.value);
    this.setState({
      cardList: filterCards,
    }, this.validationHasTrunfo);
  }

  // Ajuda de Sheila Nakashima, Erick Lima para colocar target.value,
  // e ajuda de Danillo Gonçalves para entender o funcionamento da validação do hasTrunfo
  // no botão de remover.

  handleFilter = (event) => {
    const valueOfSearch = event.target.value;
    console.log(valueOfSearch);
    this.setState({
      filterName: valueOfSearch,
    }); // fazer um array com os cards e dar push de acordo com cada letra digitada (acho q não precisa)
    // criar um novo Deck para filtrar pelo nome + tudo que o Card faz ->
    // arq.filter((card.filterName?.includes(this.state.filterName))).map(());
    // transformar o nome digitado para lowerCase e na sua 'comparação' de inclusão
  }

  render() {
    const { cardList } = this.state;
    return (
      <main>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          handleFilter={ this.handleFilter }
        />
        <Card { ...this.state } />
        {cardList.map((card) => (<Deck
          { ...card }
          key={ card.cardName }
          buttonRemoveCard={ this.buttonRemoveCard }
        />))}
      </main>
    );
  }
}

// Ajuda de Danillo Gonçalves e Luá Octaviano para entender o que se passava no Card.
// Ajuda de Danillo Gonçalves para entender a contrução do map para o Deck.

export default App;
