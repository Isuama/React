import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const[enteredTitle, setEntertedTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const titleChangeEventHandler = event => { setEntertedTitle(event.target.value)};
    const amountChangeEventHandler  = event => { setEnteredAmount(event.target.value)};
    const dateChangeEventHandler  = event => { setEnteredDate(event.target.value)};

    // const[userInput, setUserInput] = useState({
    //   erteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: ''
    // });

    // const titleChangeEventHandler = event => {
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value }
    //   });
    // };

    // const amountChangeEventHandler = event => {
    //   setUserInput((prevState) => {
    //     return { ...prevState, entereAmount: event.target.value }
    //   });
    // };

    //not the recommened way
    // const dateChangeEventHandler = event => {
    //   setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    //   });
    // };

    // const dateChangeEventHandler = event => {
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value }
    //   });
    // };

    const submitHandler = (event) => {

      //by default when form submit clicks, it reload page as request is sent to the server, below is to prevent it
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData);
      setEntertedTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      //console.log(expenseData)
    };
    
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeEventHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeEventHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeEventHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
