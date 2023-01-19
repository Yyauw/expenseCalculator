import Expense from "./Expense"

const ExpenseList = (props)=>{
    return(
        <div>
            {props.expenseData.length === 0?<h4 className="text-center">No expenses submited for this year</h4>:''}
            {props.expenseData.map((element, i)=>{
               return <Expense expenseData={element} key={i}/>
            })}
        </div>
    ) 
}

export default ExpenseList