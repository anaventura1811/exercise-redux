import React from 'react';
import { Link } from 'react-router';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <Link to="/clientescadastrados">Entrar</Link>

    </form>
  )
}

export default Login;
