import './App.css';
import Expenses from './components/Expenses';
import Card from './components/CompositionExercise/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

//expenses array
const synthetic_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 2, 28),
  }, {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 3, 14),
  }, {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 3, 15),
  }, {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 4, 20),
  },
];

//arrow function App
const App = () => {
  const [expenses, setExpenses] = useState(synthetic_expenses);
  const [filteredExpenses, setFilteredExpenses] = useState(synthetic_expenses);

  //add expense handler
  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log('In App.js');
    console.log(expense);
  };

  //filter changed handler
  const FilterChangedHandler = (selectedYear) => {
    setFilteredExpenses(expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear));

    console.log('In App.js');
    console.log(selectedYear);
  };

  //products array
  const products = [
    {
      id: 'p1',
      title: 'Product 1',
      price: 10,
      description: 'First product',
    }, {
      id: 'p2',
      title: 'Product 2',
      price: 20,
      description: 'Second product',
    },
  ];

  //return
  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenses={filteredExpenses}
        onYearSelected={FilterChangedHandler}
      />
      {/* {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)} */}
      {/* {products.map(product => <Product title={product.title} price={product.price} description={product.description} />)} */}
    </div>
  );
}

export default App;
