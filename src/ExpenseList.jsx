import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';


const ExpenseList = ({expenses}) => {
    return (
        <div>            
           
                {expenses.map((expense, index) => (
                    <ExpenseItem key={index} vendor={expense.vendor} amount={expense.amount} />
                ))}
           
        </div>
    );
}

export default ExpenseList;