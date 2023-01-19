import ExpenseChartBar from "./ExpenseChartBar"
import ExpenseDoughnutChart from "./ExpenseDoughnutChart"

const Charts = (props)=>{
    const monthData = [
    {label:'Jan', value: 0},
    {label:'Feb', value: 0},
    {label:'Mar', value: 0},
    {label:'Apr', value: 0},
    {label:'May', value: 0},
    {label:'Jun', value: 0},
    {label:'Jul', value: 0},
    {label:'Aug', value: 0},
    {label:'Sep', value: 0},
    {label:'Oct', value: 0},
    {label:'Nov', value: 0},
    {label:'Dec', value: 0},
    ]

    const yearData =[
        {label:'2021', value: 0},
        {label:'2022', value: 0},
        {label:'2023', value: 0},
        {label:'2024', value: 0},
        {label:'2025', value: 0},
    ]

    for(const expense of props.expenseData){
        const month = expense.date.getMonth();
        monthData[month].value += expense.amount;
    }

    for(const expense of props.allData){
        if(expense.date.getFullYear().toString() === '2021') yearData[0].value += expense.amount; 
        if(expense.date.getFullYear().toString() === '2022') yearData[1].value += expense.amount; 
        if(expense.date.getFullYear().toString() === '2023') yearData[2].value += expense.amount; 
        if(expense.date.getFullYear().toString() === '2024') yearData[3].value += expense.amount; 
        if(expense.date.getFullYear().toString() === '2025') yearData[4].value += expense.amount; 
    }
return(
    <div className="ms-5 row">
    <ExpenseChartBar data={monthData}/>
    <ExpenseDoughnutChart data={yearData}/>
    </div>
)
}

export default Charts