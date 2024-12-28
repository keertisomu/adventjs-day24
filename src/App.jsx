import { useState } from 'react'
import './App.css'
import AddExpense from './AddExpense'

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    console.log('Expenses:', expenses);
  };

  return (
    <>
    <div>     
      <div className='panel'>
        <h2>Expense Tracker</h2>
       <AddExpense addExpense={addExpense}/>       
      </div>
      </div>
    </>
  )
}

export default App
