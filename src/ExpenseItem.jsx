import React, { useState } from 'react';
import './ExpenseItem.css';
import trash from "./assets/trash.svg";

const ExpenseItem = ({ vendor, amount }) => {
  return (
    <div className="expense-item">
      
        <span>{vendor}</span>
        <span>${amount}</span>

        <button type="submit">
          <img src={trash} alt="Submit" />
        </button>
      
    </div>
  );
};

export default ExpenseItem;
