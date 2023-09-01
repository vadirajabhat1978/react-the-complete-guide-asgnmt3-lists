//import expenses css 
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

//Create Expenses function
function Expenses(props) {
    //useState
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

        props.onYearSelected(selectedYear);
    };

    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onYearSelected={filterChangeHandler} />

            {props.expenses.map(expense =>
                <ExpenseItem key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)}
        </div>
    );
}

export default Expenses;
