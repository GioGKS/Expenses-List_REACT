import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    //States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    //Updating Value
    const titleChange = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChange = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChange = (event) => {
        setEnteredDate(event.target.value)
    }

    //Submit Function
    const submitHandler = (event) => {
        event.preventDefault(); 
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle} 
          onChange={titleChange} 
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number" 
          min="0.01"  
          step="0.01"
          value={enteredAmount} 
          onChange={amountChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
          type="date" 
          min="2020-01-01" 
          max="2025-12-31"
          value={enteredDate} 
          onChange={dateChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
