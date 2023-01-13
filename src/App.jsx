import ExpenseChartBar from "./components/ExpenseChartBar"
import ExpenseDoughnutChart from "./components/ExpenseDoughnutChart"
import ExpenseListHeader from "./components/ExpenseListHeader"
import ExpenseList from "./components/ExpenseList"

function App() {
  return (
  <div className='container'>
    <h1 className="text-center my-1">ExpenseCalculator</h1>
    <div className="ms-5 row">
    <ExpenseChartBar/>
    <ExpenseDoughnutChart />
    </div>
    <ExpenseListHeader/>
    <ExpenseList />
  </div>)
}

export default App