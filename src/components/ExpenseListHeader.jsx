
const ExpenseListHeader = (props)=>{
    const setDateFilter = (event) =>{
        //console.log(event.target.value);
        props.yearSelectedToApp(event.target.value)
    }
return(
    <div className="row mt-4 mb-3">
        <h2 className="col-3 offset-1">Expenses {props.year}</h2>
        <label htmlFor="" className="col-form-label col-2 text-end offset-3">Filter by year</label>
        <div className="col-1">
        <select name="" id="" className="form-select" onChange={setDateFilter} value={props.year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>
        </div>
    </div>
)
}

export default ExpenseListHeader