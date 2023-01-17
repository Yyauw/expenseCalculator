import ExpenseChartBar from "./components/ExpenseChartBar"
import ExpenseDoughnutChart from "./components/ExpenseDoughnutChart"
import ExpenseListHeader from "./components/ExpenseListHeader"
import ExpenseList from "./components/ExpenseList"
import NewExpense from "./components/NewExpense"

function App() {
  const allData = [];
  let filteredData = []
  const getData= (data)=>{
    allData.push(data);
    //console.log(allData)
  }
  const getFilterYear =(yearSelected) => {
    const x = yearSelected
    filteredData = allData.map(element=>{
      if(element.date.getFullYear() === x){
        return element
      } else{
        return ''
      }
    })
    console.log(filteredData)
  }
  return (
  <div className='container'>
    <h1 className="text-center my-1">ExpenseCalculator</h1>
    <NewExpense dataToApp={getData} />
    <div className="ms-5 row">
    <ExpenseChartBar/>
    <ExpenseDoughnutChart />
    </div>
    <ExpenseListHeader yearSelectedToApp ={getFilterYear}/>
    <ExpenseList />
  </div>)
}

export default App