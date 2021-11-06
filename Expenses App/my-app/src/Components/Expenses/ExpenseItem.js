import React from "react";
import '../Expenses/ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import { useState } from 'react';

function ExpenseItem(props){
   
   
    return (
        <div>
        <div className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    
    </div>
    )}

export default ExpenseItem