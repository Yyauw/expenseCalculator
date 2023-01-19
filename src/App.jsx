import ExpenseListHeader from "./components/ExpenseListHeader"
import ExpenseList from "./components/ExpenseList"
import NewExpense from "./components/NewExpense"
import Charts from "./components/Charts"
import { useState } from "react"

function App() {
  const [allData, setAllData] = useState([]);
  const [year, setYear] = useState('2023');

  const getData= (data)=>{
    setAllData(prvData =>{
      return [data, ...prvData]
    });
    //console.log(allData)
  }

  const getFilterYear =(yearSelected) => {
    setYear(yearSelected)
  }

  const filteredData = allData.filter(element=>{
    return  element.date.getFullYear().toString() === year
  })

  return (
  <div className='container'>
    <h1 className="text-center my-1">ExpenseCalculator</h1>
    <NewExpense dataToApp={getData} />
    <Charts expenseData = {filteredData} allData ={allData}/>
    <ExpenseListHeader yearSelectedToApp ={getFilterYear} year ={year}/>
    <ExpenseList expenseData={filteredData}/>
  </div>)
}

export default App