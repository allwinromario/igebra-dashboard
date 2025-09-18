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
  Filler
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
  const [activeChart, setActiveChart] = useState('bar'); // 'bar' or 'radar'
  
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

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
            weight: 'bold' // Changed from '600' to 'bold'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold'
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

  const radarOptions = {
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
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeChart === 'bar'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Bar Chart
        </button>
        <button
          onClick={() => setActiveChart('radar')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeChart === 'radar'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Radar Chart
        </button>
      </div>

      <div className="h-[300px]">
        {activeChart === 'bar' && <Bar options={barOptions} data={barData} />}
        {activeChart === 'radar' && <Radar options={radarOptions} data={radarData} />}
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6">
        {labels.map((label, index) => (
          <div key={label} className="text-center">
            <Text className="text-sm font-medium text-gray-600">{label}</Text>
            <Text className="text-lg font-bold text-blue-600">{scores[index]}%</Text>
          </div>
        ))}
      </div>
    </div>
  );
}