'use client';

import { Card, Title } from '@tremor/react'
import OverviewStats from './components/OverviewStats'
import SkillsChart from './components/SkillsChart'
import StudentTable from './components/StudentTable'
import InsightsSection from './components/InsightsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Performance Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">Monitor student performance and cognitive skills</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Overview</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Analytics</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Reports</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1500px] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Stats Section */}
          <section>
            <OverviewStats />
          </section>

          {/* Charts and Insights Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Title className="text-xl font-bold text-gray-900 mb-6">Skills Distribution</Title>
              <div className="h-[300px] sm:h-[400px]">
                <SkillsChart />
              </div>
            </Card>
            
            <Card className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Title className="text-xl font-bold text-gray-900 mb-6">Key Insights</Title>
              <InsightsSection />
            </Card>
          </section>

          {/* Table Section */}
          <section>
            <Card className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Title className="text-xl font-bold text-gray-900 mb-6">Student Performance Table</Title>
              <StudentTable />
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}