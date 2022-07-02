import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import Transaction from './components/Transaction';
import {GlobalProvider} from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <Transaction />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
