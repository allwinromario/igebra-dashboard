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
    <div className="p-2 sm:p-4">
      <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-4 sm:gap-6">
        <Card 
          decoration="top" 
          decorationColor="blue"
          className="shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex flex-col gap-1">
              <Text className="text-sm sm:text-base font-medium text-gray-600">Total Students</Text>
              <Metric className="text-2xl sm:text-3xl font-bold text-blue-600">{stats.totalStudents}</Metric>
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
            <div className="flex flex-col gap-1">
              <Text className="text-sm sm:text-base font-medium text-gray-600">Average Score</Text>
              <Metric className="text-2xl sm:text-3xl font-bold text-emerald-600">{stats.avgScore.toFixed(1)}%</Metric>
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
            <div className="flex flex-col gap-1">
              <Text className="text-sm sm:text-base font-medium text-gray-600">Average Engagement</Text>
              <Metric className="text-2xl sm:text-3xl font-bold text-amber-600">{stats.avgEngagement.toFixed(1)} min</Metric>
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
            <div className="flex flex-col gap-1">
              <Text className="text-sm sm:text-base font-medium text-gray-600">Top Skill</Text>
              <Metric className="text-2xl sm:text-3xl font-bold text-purple-600">{stats.topSkill}</Metric>
            </div>
          </div>
        </Card>
      </Grid>
    </div>
  );
}