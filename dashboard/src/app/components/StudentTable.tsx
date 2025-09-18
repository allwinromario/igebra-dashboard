'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TextInput,
  Card,
} from '@tremor/react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

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
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setStudents(generateMockStudents(50));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by ID, name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                     text-base text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     hover:border-gray-400 transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>
        <div className="text-base font-medium text-gray-700 whitespace-nowrap">
          Showing {paginatedStudents.length} of {filteredStudents.length} students
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableHeaderCell className="text-base font-bold text-gray-900">ID</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Name</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Class</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Comp.</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Attn.</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Focus</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Ret.</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Eng. (min)</TableHeaderCell>
              <TableHeaderCell className="text-base font-bold text-gray-900">Score</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedStudents.map((student) => (
              <TableRow key={student.student_id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="text-base font-semibold text-gray-900">{student.student_id}</TableCell>
                <TableCell className="text-base text-gray-900">{student.name}</TableCell>
                <TableCell className="text-base text-gray-900">{student.class}</TableCell>
                <TableCell className="text-base text-gray-900">{student.comprehension}</TableCell>
                <TableCell className="text-base text-gray-900">{student.attention}</TableCell>
                <TableCell className="text-base text-gray-900">{student.focus}</TableCell>
                <TableCell className="text-base text-gray-900">{student.retention}</TableCell>
                <TableCell className="text-base text-gray-900">{student.engagement_time}</TableCell>
                <TableCell className={`text-base ${getScoreColor(student.assessment_score)}`}>
                  {student.assessment_score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 px-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 text-base font-medium rounded-lg
              ${currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200'} 
              transition-colors duration-200 w-full sm:w-auto justify-center`}
          >
            <ChevronLeftIcon className="h-5 w-5 mr-2" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
          </div>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 text-base font-medium rounded-lg
              ${currentPage === totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200'} 
              transition-colors duration-200 w-full sm:w-auto justify-center`}
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}