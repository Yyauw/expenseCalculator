import { useState } from "react";

const ExpenseListHeader = (props)=>{
    const [year, setYear] = useState('2023')
    const setDateFilter = (event) =>{
        //console.log(event.target.value);
        setYear(event.target.value)
        console.log(year)
        props.yearSelectedToApp(year)
    }
return(
    <div className="row mt-4 mb-3">
        <h2 className="col-3 offset-1">Expenses {year}</h2>
        <label htmlFor="" className="col-form-label col-2 text-end offset-3">Filter by year</label>
        <div className="col-1">
        <select name="" id="" className="form-select" onChange={setDateFilter} defaultValue={2023}>
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