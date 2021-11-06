import React, {useState} from "react";
import '../NewExpense/Expenseform.css'


const Expenseform = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

   
    
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const priceChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)

        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control input ">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control input ">
                <label>Price:</label>
                <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} value={enteredAmount}/>
            </div>
            <div className="new-expense__control input ">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2031-12-12" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
            <div className="new-expense__control input ">
                <button  className="new-expense__actions">Add Expense</button>
                <button onClick={props.onCancel}  className="new-expense__actions">Cancel</button>
            </div>


        </div>
        
    </form>

    )}

export default Expenseform