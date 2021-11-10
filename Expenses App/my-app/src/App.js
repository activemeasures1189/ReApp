import React, {useState} from 'react';
import './App.css';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense'


const dummy_expenses= [
    {
      id: 'e1',
      title: 'Table Fan',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Computer',
      amount: 1100,
      date: new Date(2021, 12, 5),
    },
    {
      id: 'e6',
      title: 'Car',
      amount: 2500,
      date: new Date(2021, 9, 13),
    },
  ];
  const App = ()=>{
    const [expenses, setExpenses] = useState(dummy_expenses)
    const addExpenseHandler = expense => {
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses]
      })
    };
  return (
  <div>
    
   <NewExpense onAddExpense={addExpenseHandler}/>
   <Expenses items={expenses}/>
  
  
  </div>
)
  
  
   
  
  
   
  
   
  
}


export default App;
