import "./TotalExpense.css";

const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount);
  }, 0);
  console.log("Total:", total);
  return (
    <div className="total-expense">
      <span>Total Spent</span>
      <span>${total}</span>
    </div>
  );
};

export default TotalExpense;
