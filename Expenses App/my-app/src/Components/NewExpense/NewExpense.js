import React, {useState} from "react";
import '../NewExpense/NewExpense.css'
import '../NewExpense/Expenseform.css'
import Expenseform from "./ExpenseForm";


const NewExpense = (props) => {
  const [showingButton, setForm] = useState(false)
  
 

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
    };
  const showFormHandler = ()=>{
    setForm(true)
    
  }
  const cancelFormHandler = ()=>{
    setForm(false)
    
  }
    return (
      <div className='new-expense'>
        {!showingButton && <button onClick={showFormHandler}>Add Expense</button>}
        {showingButton && <Expenseform onCancel={cancelFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      </div>
    );
  };

export default NewExpense