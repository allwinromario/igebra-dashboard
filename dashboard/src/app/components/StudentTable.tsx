'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from '@tremor/react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import studentsData from '../data/students.json';

interface Student {
  student_id: string;
  name: string;
  class: string;
  comprehension: number;
  attention: number;
  focus: number;
  retention: number;
  engagement_time: number;
  assessment_score: number;
}


const getScoreColor = (score: number) => {
  if (score >= 90) return 'text-green-600 font-semibold';
  if (score >= 80) return 'text-blue-600 font-semibold';
  if (score >= 70) return 'text-yellow-600 font-semibold';
  return 'text-red-600 font-semibold';
};

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    // Load the real 1000-student dataset
    setStudents(studentsData as Student[]);
  }, []);

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.student_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  // Calculate averages for metrics
  const averages = {
    comprehension: Math.round(students.reduce((sum, s) => sum + s.comprehension, 0) / students.length),
    attention: Math.round(students.reduce((sum, s) => sum + s.attention, 0) / students.length),
    focus: Math.round(students.reduce((sum, s) => sum + s.focus, 0) / students.length),
    retention: Math.round(students.reduce((sum, s) => sum + s.retention, 0) / students.length),
    engagement: Math.round(students.reduce((sum, s) => sum + s.engagement_time, 0) / students.length),
  };

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      {/* Metrics Cards with improved alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-3 leading-tight">Comprehension</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{averages.comprehension}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-3 leading-tight">Attention</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{averages.attention}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-3 leading-tight">Focus</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{averages.focus}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-3 leading-tight">Retention</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{averages.retention}%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-3 leading-tight">Engagement</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{averages.engagement} min</div>
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