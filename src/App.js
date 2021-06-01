import { Route, Switch } from 'react-router';
import './App.css';
import Cadastro from './pages/Cadastro';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginNaoEfetuado from './pages/LoginNaoEfetuado';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/clientescadastrados"  component={ ClientesCadastrados } />
      <Route component={ LoginNaoEfetuado } />
    </Switch>
    </>
  );
}

export default App;
