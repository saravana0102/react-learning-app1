import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenseList, setExpenseList] = useState(expenses);

  const addNewExpenseItem = (expenseData) => {
    setExpenseList((prevState) => {
        return [expenseData, ...prevState];
    });
    console.log(expenses);
  };


  return (
    <div>
      <NewExpense onSaveExpense={addNewExpenseItem}/>
      <Expenses expenses={expenseList}/>      
    </div>
  );

  // How jsx converts a code 
  // return React.createElement('div', {}, 
  //   React.createElement('h2',{}, 'Let\'s get started'),
  //   React.createElement(Expenses, {expenses: expenses}),
  // );

}

export default App;
