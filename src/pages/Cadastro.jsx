import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addClient } from  '../actions';


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
    this.setState((previusState) => ({ client: { ...previusState.client, [ target.id ]: target.value } }));
  };
  resgisterClient = (event) => {
    event.preventDefault();
    const { client } = this.state;
    const { addClientToList } = this.props;
    console.log(client);
    addClientToList(client);
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

const mapDispachToProps = (dispach) =>({
  addClientToList: (client) => dispach(addClient(client)),
});

export default connect(null, mapDispachToProps)(Cadastro);
