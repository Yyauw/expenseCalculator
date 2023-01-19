import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
      position: 'right',
    },
    title: {
      display: true,
      text: 'Years Expenses',
    },
  },
};

const labels = ['2021','2022','2023','2024','2025'];




const ExpenseDoughnutChart = (props) =>{
  const yearData = props.data.map(el =>{
    return el.value
  })
  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses',
        data: yearData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };
    return <div className="col-md-6 card shadow mx-auto mt-2 mt-md-0" style={{width:'400px'}}>
    <Pie data={data} options={options}/>
    </div>
}

export default ExpenseDoughnutChart