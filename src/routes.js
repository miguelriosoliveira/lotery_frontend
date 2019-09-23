import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Login from './pages/Login';
import InsertBet from './pages/InsertBet';
import Loteries from './pages/Loteries.jsx';
import App from './App';

export default function Routes() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/loteries" component={Loteries} />
      <Route exact path="/:lotery/bet" component={InsertBet} />
    </BrowserRouter>
  );
}
