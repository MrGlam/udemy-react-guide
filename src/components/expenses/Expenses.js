import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";



const Expenses = (props) => {
  const [yearFilter,setYearFilter] = useState('')

  const YearFilterHandler = (year) => {
    setYearFilter(parseInt(year))
  }

  return (


    
    <Card className="expenses">
      <ExpensesFilter YearFilterHandler={YearFilterHandler}/>
      {props.items.map(function (item, idx) {
        
        if (item.date.getFullYear()=== yearFilter ){

          return (
          <ExpenseItem
            key={idx}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
        }
        
          
        
        
      })}
    </Card>
  );
};

export default Expenses;
