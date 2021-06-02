import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const listOfClients = (props) => {
  const { clientList } = props;
  console.log(clientList, 'console de values da lista de clientes');
  return (
    <ul>
      {clientList.map((client) => (
        <li>{`Nome: ${client.name}, idade: ${client.age}, email: ${client.email}`}</li>
      ))}
    </ul>
  )
}

function ClientesCadastrados(props) {
  const { clientList } = props;
  console.log(props)
  return (
    <>
      {
        clientList.length === 0
          ? <h1>Não há clientes cadastrados</h1>
          : listOfClients(props)
      }
      <Link to="/cadastro">Faça seu cadastro</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  clientList: state.clientsReducer.listClient,
});

export default connect(mapStateToProps, null)(ClientesCadastrados);
