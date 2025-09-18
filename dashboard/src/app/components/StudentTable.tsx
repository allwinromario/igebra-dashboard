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

interface Student {
  student_id: number;
  name: string;
  class: string;
  comprehension: number;
  attention: number;
  focus: number;
  retention: number;
  engagement_time: number;
  assessment_score: number;
}

const generateMockStudents = (count: number): Student[] => {
  return Array.from({ length: count }, (_, i) => ({
    student_id: i + 1,
    name: `Student_${i + 1}`,
    class: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
    comprehension: Math.round(Math.random() * 30 + 60),
    attention: Math.round(Math.random() * 30 + 60),
    focus: Math.round(Math.random() * 30 + 60),
    retention: Math.round(Math.random() * 30 + 60),
    engagement_time: Math.round(Math.random() * 30 + 30),
    assessment_score: Math.round(Math.random() * 30 + 60),
  }));
};

export default function StudentTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [students] = useState<Student[]>(generateMockStudents(50));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.student_id.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 font-bold';
    if (score >= 70) return 'text-blue-600 font-bold';
    if (score >= 60) return 'text-amber-600 font-bold';
    return 'text-red-600 font-bold';
  };

  // Calculate averages
  const averages = {
    comprehension: Math.round(students.reduce((acc, s) => acc + s.comprehension, 0) / students.length),
    attention: Math.round(students.reduce((acc, s) => acc + s.attention, 0) / students.length),
    focus: Math.round(students.reduce((acc, s) => acc + s.focus, 0) / students.length),
    retention: Math.round(students.reduce((acc, s) => acc + s.retention, 0) / students.length),
    engagement: Math.round(students.reduce((acc, s) => acc + s.engagement_time, 0) / students.length),
  };

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="bg-white shadow-sm p-4">
          <div className="flex flex-col items-center">
            <Text className="text-sm font-medium text-gray-600 mb-1">Comprehension</Text>
            <Text className="text-2xl font-bold text-blue-600">{averages.comprehension}%</Text>
          </div>
        </Card>
        <Card className="bg-white shadow-sm p-4">
          <div className="flex flex-col items-center">
            <Text className="text-sm font-medium text-gray-600 mb-1">Attention</Text>
            <Text className="text-2xl font-bold text-blue-600">{averages.attention}%</Text>
          </div>
        </Card>
        <Card className="bg-white shadow-sm p-4">
          <div className="flex flex-col items-center">
            <Text className="text-sm font-medium text-gray-600 mb-1">Focus</Text>
            <Text className="text-2xl font-bold text-blue-600">{averages.focus}%</Text>
          </div>
        </Card>
        <Card className="bg-white shadow-sm p-4">
          <div className="flex flex-col items-center">
            <Text className="text-sm font-medium text-gray-600 mb-1">Retention</Text>
            <Text className="text-2xl font-bold text-blue-600">{averages.retention}%</Text>
          </div>
        </Card>
        <Card className="bg-white shadow-sm p-4 col-span-2 md:col-span-1">
          <div className="flex flex-col items-center">
            <Text className="text-sm font-medium text-gray-600 mb-1">Engagement</Text>
            <Text className="text-2xl font-bold text-blue-600">{averages.engagement} min</Text>
          </div>
        </Card>
      </div>

      {/* Search and Info Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
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
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
          <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                          ${currentPage === 1 
                            ? 'text-gray-400 bg-gray-50 cursor-not-allowed' 
                            : 'text-blue-600 bg-white hover:bg-blue-50'}`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                          ${currentPage === totalPages 
                            ? 'text-gray-400 bg-gray-50 cursor-not-allowed' 
                            : 'text-blue-600 bg-white hover:bg-blue-50'}`}
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
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 rounded-l-md border
                              text-sm font-medium ${
                                currentPage === 1
                                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                  : 'bg-white text-blue-600 hover:bg-blue-50'
                              }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-4 py-2 rounded-r-md border
                              text-sm font-medium ${
                                currentPage === totalPages
                                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                  : 'bg-white text-blue-600 hover:bg-blue-50'
                              }`}
                  >
                    Next
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