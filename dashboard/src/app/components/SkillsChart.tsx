'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartOptions
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { Text } from '@tremor/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SkillsChart() {
  const [activeChart, setActiveChart] = useState('bar');
  
  const labels = ['Comprehension', 'Attention', 'Focus', 'Retention', 'Engagement'];
  const scores = [74, 74, 76, 76, 45];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Average Score',
        data: scores,
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      }
    ],
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12
          },
          boxWidth: 20,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  const radarData = {
    labels,
    datasets: [
      {
        label: 'Average Score',
        data: scores,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)'
      }
    ]
  };

  const radarOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveChart('bar')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            activeChart === 'bar'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Bar Chart
        </button>
        <button
          onClick={() => setActiveChart('radar')}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            activeChart === 'radar'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Radar Chart
        </button>
      </div>

      <div className="h-[300px] w-full">
        {activeChart === 'bar' ? (
          <Bar options={barOptions} data={barData} />
        ) : (
          <Radar options={radarOptions} data={radarData} />
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
        {labels.map((label, index) => (
          <div key={label} className="text-center p-3 bg-white rounded-lg shadow-sm">
            <Text className="text-sm font-medium text-gray-600">{label}</Text>
            <Text className="text-lg font-bold text-blue-600">{scores[index]}%</Text>
          </div>
        ))}
      </div>
    </div>
  );
}