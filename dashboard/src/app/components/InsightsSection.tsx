'use client';

import { Card, Text, List, ListItem, Bold } from '@tremor/react';

export default function InsightsSection() {
  const insights = [
    {
      id: 1,
      title: 'Strong Correlation',
      description: 'Comprehension shows the strongest correlation with assessment scores (0.85)',
    },
    {
      id: 2,
      title: 'Learning Patterns',
      description: 'Students with high focus and retention tend to perform better regardless of engagement time',
    },
    {
      id: 3,
      title: 'Engagement Impact',
      description: 'Optimal engagement time is between 40-50 minutes per session',
    },
    {
      id: 4,
      title: 'Learning Personas',
      description: 'Four distinct learning patterns identified through clustering analysis',
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <Card key={insight.id} decoration="left" decorationColor="blue" className="bg-white shadow-sm">
          <div className="space-y-2">
            <Text className="text-lg font-bold text-gray-900">{insight.title}</Text>
            <Text className="text-base text-gray-700">{insight.description}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
}