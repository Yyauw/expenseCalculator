import ExpenseChartBar from "./ExpenseChartBar"
import ExpenseDoughnutChart from "./ExpenseDoughnutChart"

function App() {
  return (
  <div className='container'>
    <div className="row">
    <ExpenseChartBar/>
    <ExpenseDoughnutChart />
    </div>
  </div>)
}

export default App