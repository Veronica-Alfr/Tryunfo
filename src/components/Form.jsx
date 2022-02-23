import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label>
          <input data-testid="name-input" type="text" />
        </label>
      </form>
    );
  }
}

export default Form;
