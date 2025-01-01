import "./TotalExpense.css";

const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className="total-expense">
      <span>Total Spent</span>
      <span>${total}</span>
    </div>
  );
};

export default TotalExpense;