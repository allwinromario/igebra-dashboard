'use client';

import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Bar, Line, Radar } from 'react-chartjs-2';
import { Card, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ['Comprehension', 'Attention', 'Focus', 'Retention', 'Engagement'];
const scores = [70, 65, 75, 68, 45];

export default function SkillsChart() {
  const [activeTab, setActiveTab] = useState(0);
  const [chartData, setChartData] = useState({
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
  });

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            weight: 'bold' as const
          }
        }
      },
      title: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold' as const
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

  const lineOptions = {
    ...barOptions,
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
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
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            weight: 'bold' as const
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

  return (
    <div className="w-full h-full">
      <TabGroup>
        <TabList className="mb-4">
          <Tab>Bar Chart</Tab>
          <Tab>Line Chart</Tab>
          <Tab>Radar Chart</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <div className="h-[300px] sm:h-[400px]">
              <Bar options={barOptions} data={chartData} />
            </div>
          </TabPanel>
          
          <TabPanel>
            <div className="h-[300px] sm:h-[400px]">
              <Line options={lineOptions} data={chartData} />
            </div>
          </TabPanel>
          
          <TabPanel>
            <div className="h-[300px] sm:h-[400px]">
              <Radar options={radarOptions} data={radarData} />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {labels.map((label, index) => (
          <Card key={label} className="p-2 text-center">
            <p className="text-sm font-medium text-gray-600">{label}</p>
            <p className="text-lg font-bold text-blue-600">{scores[index]}%</p>
          </Card>
        ))}
      </div>
    </div>
  );
}