import React, { useState } from 'react';
import './ExpenseItem.css';
import trash from "./assets/trash.svg";

const ExpenseItem = ({ vendor, amount , id, deleteExpense }) => {

  const handleDelete = () => {
    deleteExpense(id);
  }

  return (
    <div className="expense-item">
      
        <span className='vendor'>{vendor}</span>
        <span className='amount'>${amount}</span>

        <button type="submit" onClick={handleDelete}>
          <img src={trash} alt="Submit" />
        </button>
      
    </div>
  );
};

export default ExpenseItem;
