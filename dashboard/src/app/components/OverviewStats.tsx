'use client';

import { Card, Metric, Text, Grid } from '@tremor/react';
import { useState, useEffect } from 'react';
import { UserGroupIcon, ChartBarIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Stats {
  totalStudents: number;
  avgScore: number;
  avgEngagement: number;
  topSkill: string;
}

export default function OverviewStats() {
  const [stats, setStats] = useState<Stats>({
    totalStudents: 0,
    avgScore: 0,
    avgEngagement: 0,
    topSkill: '',
  });

  useEffect(() => {
    setStats({
      totalStudents: 1000,
      avgScore: 75.8,
      avgEngagement: 45.2,
      topSkill: 'Focus',
    });
  }, []);

  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6">
      <Card 
        decoration="top" 
        decorationColor="blue"
        className="shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <UserGroupIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <Text className="text-sm font-medium text-gray-500">Total Students</Text>
            <Metric className="text-2xl font-bold text-blue-600">{stats.totalStudents}</Metric>
          </div>
        </div>
      </Card>

      <Card 
        decoration="top" 
        decorationColor="emerald"
        className="shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <ChartBarIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <Text className="text-sm font-medium text-gray-500">Average Score</Text>
            <Metric className="text-2xl font-bold text-emerald-600">{stats.avgScore.toFixed(1)}%</Metric>
          </div>
        </div>
      </Card>

      <Card 
        decoration="top" 
        decorationColor="amber"
        className="shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <ClockIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <Text className="text-sm font-medium text-gray-500">Average Engagement</Text>
            <Metric className="text-2xl font-bold text-amber-600">{stats.avgEngagement.toFixed(1)} min</Metric>
          </div>
        </div>
      </Card>

      <Card 
        decoration="top" 
        decorationColor="purple"
        className="shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <SparklesIcon className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <Text className="text-sm font-medium text-gray-500">Top Skill</Text>
            <Metric className="text-2xl font-bold text-purple-600">{stats.topSkill}</Metric>
          </div>
        </div>
      </Card>
    </Grid>
  );
}