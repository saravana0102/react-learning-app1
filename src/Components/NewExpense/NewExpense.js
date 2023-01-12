import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

    const newExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random()
        };
        props.onSaveExpense(expense);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={newExpenseHandler}/>
    </div>
}

export default NewExpense;