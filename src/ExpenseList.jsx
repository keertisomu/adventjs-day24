import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ expenses , deleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          vendor={expense.vendor}
          amount={expense.amount}
          id={expense.id}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
