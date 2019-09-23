import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Loteries.css';

export default function Loteries({
  history,
  match: {
    params: { lotery },
  },
}) {
  const [loteries, setLoteries] = useState([]);

  useEffect(() => {
    api
      .get('/loteries')
      .then(({ data }) => setLoteries(data))
      .catch(console.error);
  }, [lotery]);

  return (
    <div className="lotery-list-component">
      {loteries.map(l => (
        <div key={l} onClick={() => history.push(`/${l}/bet`)}>
          {l}
        </div>
      ))}
    </div>
  );
}
