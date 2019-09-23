import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './InsertBet.css';

export default function InsertBet({
  history,
  match: {
    params: { lotery },
  },
}) {
  const [bet, setBet] = useState(null);

  // useEffect(() => {
  //   api
  //     .get('/loteries')
  //     .then(({ data }) => setLoteries(data))
  //     .catch(console.error);
  // }, [lotery]);

  function onSubmit(e) {
    e.preventDefault();
    console.log('deveria ter mandado o numero', bet);
  }

  console.log(bet);

  return (
    <div className="insert-bet-component">
      <div>selcionado: {lotery}</div>
      <div>números da aposta:</div>
      <form onSubmit={onSubmit}>
        <input type="number" name="bet" onChange={({ target: { value } }) => setBet(value)} />
      </form>
    </div>
  );
}
