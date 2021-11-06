import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import '../Expenses/Expenses.css'
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) =>{
  const [filterYear, setFilteredYear] = useState('2019')
  
  const filterChangeHandler = (selectedyear)=>{
    setFilteredYear(selectedyear)
    console.log(selectedyear)
  }
  const filterExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear
  })
  
  return(
    <div className="expenses">
    <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filterExpenses} />
    <ExpensesList items={filterExpenses}/> 
     </div>

)
}

export default Expenses