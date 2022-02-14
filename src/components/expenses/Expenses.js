import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart";




const Expenses = (props) => {
  const [yearFilter,setYearFilter] = useState('2022')

  const YearFilterHandler = (year) => {
    setYearFilter(parseInt(year))
  }

  const subList=props.items.filter(expense =>(expense.date.getFullYear() === yearFilter))

  return (
    
    <Card className="expenses">
      <ExpensesFilter selected = {yearFilter} YearFilterHandler={YearFilterHandler}/>
      <ExpensesChart expenses={subList}/>
      <ExpensesList items={subList}/>

    
          
    </Card>
  );

};

export default Expenses;
