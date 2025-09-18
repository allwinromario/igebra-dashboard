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

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.student_id.toString().includes(searchTerm)
  );

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
      {/* Search and Info Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full sm:w-96">
          <TextInput
            icon={MagnifyingGlassIcon}
            placeholder="Search by ID, name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Text className="text-gray-600">
          Showing {Math.min(filteredStudents.length, 10)} of {filteredStudents.length} students
        </Text>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <Card className="p-4">
          <Text className="text-sm text-gray-600">Comprehension</Text>
          <Text className="text-2xl font-bold text-blue-600">{averages.comprehension}%</Text>
        </Card>
        <Card className="p-4">
          <Text className="text-sm text-gray-600">Attention</Text>
          <Text className="text-2xl font-bold text-blue-600">{averages.attention}%</Text>
        </Card>
        <Card className="p-4">
          <Text className="text-sm text-gray-600">Focus</Text>
          <Text className="text-2xl font-bold text-blue-600">{averages.focus}%</Text>
        </Card>
        <Card className="p-4">
          <Text className="text-sm text-gray-600">Retention</Text>
          <Text className="text-2xl font-bold text-blue-600">{averages.retention}%</Text>
        </Card>
        <Card className="p-4 sm:col-span-1 col-span-2">
          <Text className="text-sm text-gray-600">Engagement</Text>
          <Text className="text-2xl font-bold text-blue-600">{averages.engagement} min</Text>
        </Card>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-50">
              <TableHeaderCell className="p-3">ID</TableHeaderCell>
              <TableHeaderCell className="p-3">Name</TableHeaderCell>
              <TableHeaderCell className="p-3">Class</TableHeaderCell>
              <TableHeaderCell className="p-3">Comp.</TableHeaderCell>
              <TableHeaderCell className="p-3">Attn.</TableHeaderCell>
              <TableHeaderCell className="p-3">Focus</TableHeaderCell>
              <TableHeaderCell className="p-3">Ret.</TableHeaderCell>
              <TableHeaderCell className="p-3">Eng. (min)</TableHeaderCell>
              <TableHeaderCell className="p-3">Score</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.slice(0, 10).map((student) => (
              <TableRow 
                key={student.student_id} 
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell className="p-3">{student.student_id}</TableCell>
                <TableCell className="p-3">{student.name}</TableCell>
                <TableCell className="p-3">{student.class}</TableCell>
                <TableCell className="p-3">{student.comprehension}</TableCell>
                <TableCell className="p-3">{student.attention}</TableCell>
                <TableCell className="p-3">{student.focus}</TableCell>
                <TableCell className="p-3">{student.retention}</TableCell>
                <TableCell className="p-3">{student.engagement_time}</TableCell>
                <TableCell className={`p-3 ${getScoreColor(student.assessment_score)}`}>
                  {student.assessment_score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}