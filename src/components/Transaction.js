import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalContext';

function Transaction() {
  const {transactions,deleteTransaction} = useContext(GlobalContext);
  
  // transactions.map(transaction=>console.log(transaction))
    return (
        <div>
        <h3>History</h3>
        <ul className='list'>
        {transactions.map(transaction=>(<li key={transaction.id} className={transaction.amount > 0 ? 'plus':'minus'}>
            {transaction.text}<span>{transaction.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
          </li>))}
        </ul>
        </div>
    )
}

export default Transaction
