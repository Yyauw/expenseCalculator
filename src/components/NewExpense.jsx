import ExpenseForm from "./ExpenseForm";

const NewExpense = () =>{
    return(
        <div className="card my-3">
            {1==2? <button className="btn btn-primary">Add Expense</button>:''}
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;