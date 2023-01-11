import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Monthly Expenses',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: [123,435,446,1231,2323,2323,112,100,324,688,345,344,0,342],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const ExpenseChartBar= () =>{
    return <div className='col-md-6'><Bar options={options} data={data} /></div>
}

export default ExpenseChartBar