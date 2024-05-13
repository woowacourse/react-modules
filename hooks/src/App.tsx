import './App.css';

import CardCVC from './components/CardCVC';
import CardCompany from './components/CardCompany';
import CardExpirationDate from './components/CardExpirationDate';
import CardHolderName from './components/CardHolderName';
import CardNumber from './components/CardNumber';
import CardPassword from './components/CardPassword';
import React from 'react';

function App() {
  return (
    <div>
      <h2>CardNumber</h2>
      <CardNumber />
      <h2>CardCompany</h2>
      <CardCompany />
      <h2>CardExpirationDate</h2>
      <CardExpirationDate />
      <h2>CardHolderName</h2>
      <CardHolderName />
      <h2>CardCVC</h2>
      <CardCVC />
      <h2>CardPassword</h2>
      <CardPassword />
    </div>
  );
}

export default App;
