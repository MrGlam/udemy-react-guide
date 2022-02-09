import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {

  return (
    <div className="expenses">
      {props.items.map(function (item, idx) {
        return (
          <ExpenseItem
            key={idx}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
