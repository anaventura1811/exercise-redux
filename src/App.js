import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
    </Switch>
    </>
  );
}

export default App;
