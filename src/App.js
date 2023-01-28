import React, {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const exp = [
  {
    id: "e1",
    title: "New TV",
    amount: 94.12,
    date: new Date(2020, 2, 14),
  },
  {
    id: "e2",
    title: "Trip To Italy",
    amount: 1350,
    date: new Date(2020, 7, 22),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Computer",
    amount: 450,
    date: new Date(2022, 5, 20),
  },
];

const App = () => {
   const [expenses,setExpenses] = useState(exp);

  const addExpensehandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
