'use client';

import { Card, Title, Text } from '@tremor/react'
import OverviewStats from './components/OverviewStats'
import SkillsChart from './components/SkillsChart'
import StudentTable from './components/StudentTable'
import InsightsSection from './components/InsightsSection'

export default function Home() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="text-3xl font-bold text-gray-800 mb-8">Student Performance Analytics</Title>
      
      <div className="mt-6">
        <OverviewStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Title className="text-xl font-bold text-gray-800 mb-4">Skills Distribution</Title>
          <div className="h-[400px] mt-4">
            <SkillsChart />
          </div>
        </Card>
        
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Title className="text-xl font-bold text-gray-800 mb-4">Key Insights</Title>
          <InsightsSection />
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Title className="text-xl font-bold text-gray-800 mb-6">Student Performance Table</Title>
          <StudentTable />
        </Card>
      </div>
    </main>
  )
}