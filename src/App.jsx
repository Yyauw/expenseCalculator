import ExpenseChartBar from "./ExpenseChartBar"
import ExpenseDoughnutChart from "./ExpenseDoughnutChart"
import ExpenseListHeader from "./ExpenseListHeader"

function App() {
  return (
  <div className='container'>
    <h1 className="text-center my-1">ExpenseCalculator</h1>
    <div className="row">
    <ExpenseChartBar/>
    <ExpenseDoughnutChart />
    </div>
    <ExpenseListHeader/>
  </div>)
}

export default App