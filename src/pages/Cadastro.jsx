import React, { Component } from 'react';


class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: '',
        age: '',
        email: '',
      },
    }

  };
  handleClientInformation = ( { target }) => {
    this.setState({ client: { [ target.id ]: target.value } });
  };
  resgisterClient = (event) => {
    event.preventDefault();
    const { client } = this.state;
    //chama a função que faz a escrita no store do redux
  };
  render() {
    const { name, age, email } = this.state;
    return (
    <form>
      <label htmlFor="name">
        Nome:
        <input type="text" id="name" value={ name } onChange={ this.handleClientInformation } />
      </label>
      <label htmlFor="age">
        Idade:
        <input type="text" id="age" value={ age } onChange={ this.handleClientInformation } />
      </label>
      <label htmlFor="email">
        E-mail:
        <input type="email" name="email" id="email" value={ email } onChange={ this.handleClientInformation } />
      </label>
      <button type="submit" onClick={this.resgisterClient}>Casdastrar</button>
    </form>
  )
  }  
}

export default Cadastro;

import React, { Component } from 'react';


class Cadastro extends Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <div>

      </div>
    );
  }
}

Cadastro.propTypes = {

};

export default Cadastro;
