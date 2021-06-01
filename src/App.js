import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={ Home } />
      <Route path="/login" component={ Login } />

    </Switch>
    </>
  );
}

export default App;
