'use client';

import { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TextInput,
  Card,
  Text,
  Title,
} from '@tremor/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// ... (keep the interfaces and helper functions)

export default function StudentTable() {
  // ... (keep the state and other logic)

  return (
    <div className="space-y-6">
      {/* Metrics Cards with improved alignment */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="text-base font-medium text-gray-600 mb-2">Comprehension</Text>
            <div className="text-3xl font-bold text-blue-600">{averages.comprehension}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="text-base font-medium text-gray-600 mb-2">Attention</Text>
            <div className="text-3xl font-bold text-blue-600">{averages.attention}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="text-base font-medium text-gray-600 mb-2">Focus</Text>
            <div className="text-3xl font-bold text-blue-600">{averages.focus}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="text-base font-medium text-gray-600 mb-2">Retention</Text>
            <div className="text-3xl font-bold text-blue-600">{averages.retention}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Text className="text-base font-medium text-gray-600 mb-2">Engagement</Text>
            <div className="text-3xl font-bold text-blue-600">{averages.engagement} min</div>
          </div>
        </div>
      </div>

      {/* Search and Info Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div className="w-full sm:w-96">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by ID, name or class..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder-gray-500 bg-white"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <Text className="text-sm font-medium text-gray-600 whitespace-nowrap">
          Showing {paginatedStudents.length} of {filteredStudents.length} students
        </Text>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow className="bg-gray-50">
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">ID</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Name</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Class</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Comp.</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Attn.</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Focus</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Ret.</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Eng. (min)</TableHeaderCell>
                <TableHeaderCell className="p-4 text-left font-bold text-gray-900">Score</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStudents.map((student) => (
                <TableRow 
                  key={student.student_id} 
                  className="hover:bg-gray-50 transition-colors border-t border-gray-200"
                >
                  <TableCell className="p-4 text-gray-900">{student.student_id}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.name}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.class}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.comprehension}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.attention}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.focus}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.retention}</TableCell>
                  <TableCell className="p-4 text-gray-900">{student.engagement_time}</TableCell>
                  <TableCell className={`p-4 ${getScoreColor(student.assessment_score)}`}>
                    {student.assessment_score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg
                          ${currentPage === 1 
                            ? 'text-gray-400 bg-gray-50 cursor-not-allowed' 
                            : 'text-blue-600 bg-white hover:bg-blue-50 border border-gray-300'}`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg
                          ${currentPage === totalPages 
                            ? 'text-gray-400 bg-gray-50 cursor-not-allowed' 
                            : 'text-blue-600 bg-white hover:bg-blue-50 border border-gray-300'}`}
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Page <span className="font-medium">{currentPage}</span> of{' '}
                  <span className="font-medium">{totalPages}</span>
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-lg shadow-sm -space-x-px">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 rounded-l-lg border
                              text-sm font-medium ${
                                currentPage === 1
                                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                  : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300'
                              }`}
                  >
                    <ChevronLeftIcon className="h-5 w-5 mr-2" />
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-4 py-2 rounded-r-lg border
                              text-sm font-medium ${
                                currentPage === totalPages
                                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                  : 'bg-white text-blue-600 hover:bg-blue-50 border-gray-300'
                              }`}
                  >
                    Next
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}