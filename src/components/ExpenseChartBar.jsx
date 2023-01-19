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



const ExpenseChartBar= (props) =>{
  const dataValue = props.data.map(el =>{
    return el.value
  })
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: dataValue,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    return <div className='col-md-6 card shadow'><Bar options={options} data={data} className='my-auto' /></div>
}

export default ExpenseChartBar