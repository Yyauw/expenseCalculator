import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) =>{
    const [displayForm, setDisplayForm] = useState(false)
    const showForm =() =>{
        setDisplayForm(true)
    }
    const onCancel = () =>{
        setDisplayForm(false)
    }
    const getExpenseFormData =(data) =>{
        props.dataToApp(data);
    }

    return(
        <div className="card my-3 shadow-sm">
            {!displayForm ? <button className="btn btn-primary" onClick={showForm}>Add Expense</button>:''}
            {displayForm ? <ExpenseForm closeForm={onCancel} dataToNewExpense={getExpenseFormData} />:''}
            
        </div>
    )
}

export default NewExpense;