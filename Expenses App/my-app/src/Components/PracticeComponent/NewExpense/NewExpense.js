import React from "react";
import '../NewExpense/NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)

    }
    return (
        <div className="new-expense">
           <ExpenseForm onExpenseformData={saveExpenseDataHandler} />

        </div>
    )

}

export default NewExpense