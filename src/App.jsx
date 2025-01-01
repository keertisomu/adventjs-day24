import { useState } from "react";
import "./App.css";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, {...expense , id: expenses.length + 1}]);
    console.log("Expenses:", expenses);
  };

  const deleteExpense = (index) => {    
    const newExpenses = expenses.filter((expense) => expense.id !== index);    
    setExpenses(newExpenses);
  }

  return (
    <>
      <div>
        <div className={`panel ${expenses.length > 0 ? "expanded" : ""}`}>
          <h2>Expense Tracker</h2>
          <AddExpense addExpense={addExpense} />
          {expenses.length > 0 && (
            <>
              <hr className="divider-top" />
              <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
              <div className="footer">
              <hr className="divider-bottom" />
              <TotalExpense expenses={expenses} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
