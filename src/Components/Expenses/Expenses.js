import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const yearFilterHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeYear={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredItems}/>
        <ExpenseList items={filteredItems} />
        {/* <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
