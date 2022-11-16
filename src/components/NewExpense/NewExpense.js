import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  function showFormHandler() {
    setShowForm(true);
  }

  function hideFormHandler() {
    setShowForm(false);
  }

  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
