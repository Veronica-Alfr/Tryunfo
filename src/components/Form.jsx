import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="userName">
          <input data-testid="name-input" name="name" type="text" />
        </label>
        <label htmlFor="userDescription">
          <input data-testid="description-input" name="description" type="textarea" />
        </label>
      </form>
    );
  }
}

export default Form;
