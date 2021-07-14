import React from 'react';
import './App.css';
import './components.css';
import Auth from '../src/components/Auth.jsx';
import OrderName from '../src/components/OrderName.jsx';
import Waiter from '../src/components/Waiter.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
        <Auth></Auth>
        </Route>
        
        <Route path="/OrderName">
        <OrderName></OrderName>
        </Route>

        <Route path="/Waiter">
        <Waiter></Waiter>
        </Route>

      </Switch>

    </Router>
  )
}

export default App;