'use client';

import { Card, Text } from '@tremor/react';
import { LightBulbIcon, ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function InsightsSection() {
  const insights = [
    {
      id: 1,
      title: 'Strong Correlation',
      description: 'Comprehension shows the strongest correlation with assessment scores (0.85)',
      icon: ChartBarIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Learning Patterns',
      description: 'Students with high focus and retention tend to perform better regardless of engagement time',
      icon: LightBulbIcon,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    {
      id: 3,
      title: 'Engagement Impact',
      description: 'Optimal engagement time is between 40-50 minutes per session',
      icon: ClockIcon,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      id: 4,
      title: 'Learning Personas',
      description: 'Four distinct learning patterns identified through clustering analysis',
      icon: UserGroupIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight) => {
        const Icon = insight.icon;
        return (
          <Card key={insight.id} className="p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                <Icon className={`h-6 w-6 ${insight.color}`} />
              </div>
              <div>
                <Text className="font-semibold text-gray-900">{insight.title}</Text>
                <Text className="text-gray-600 mt-1">{insight.description}</Text>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}