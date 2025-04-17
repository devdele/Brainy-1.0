import React from 'react';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../Sidebar';

const StudentsPage = () => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3; // Limited number of students per page

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample data - in a real app, this would come from an API
  const allStudents = [
   
    {
  id: 1,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 2,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 3,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 4,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 5,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 6,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 7,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 8,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 9,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 10,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 11,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 12,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 13,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 14,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 15,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 16,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 17,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 18,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 19,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 20,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 21,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 22,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 23,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 24,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 25,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 26,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 27,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 28,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 29,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 30,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 31,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 32,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 33,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 34,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 35,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 36,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 37,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 38,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 39,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 40,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 41,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 42,
  name: "Jane Doe",
  className: "Class 1",
  grade: 85,
  school: "School 1",
  attendance: "Present",
},
{
  id: 43,
  name: "John Smith",
  className: "Class 2",
  grade: 90,
  school: "School 1",
  attendance: "Absent",
},
{
  id: 44,
  name: "Jane Smith",
  className: "Class 2",
  grade: 95,
  school: "School 1",
  attendance: "Present",
},
{
  id: 45,
  name: "John Doe",
  className: "Class 1",
  grade: 80,
  school: "School 1",
  attendance: "Absent",
},
  ];

  // Filter students based on search term
  const filteredStudents = allStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.attendance.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort students based on sort field and direction
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  // Get paginated students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = sortedStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);
  
  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Get sort icon
  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  // Get attendance status style
  const getAttendanceStyle = (status) => {
    if (status.toLowerCase() === 'present') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800';
    } else {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800';
    }
  };

  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gray-50'>
      <Sidebar />
      <main className='mt-14 flex-1 p-4 sm:p-6 lg:p-8 flex flex-col'>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Students</h1>
          <p className="text-gray-600">Manage and view all students</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex-1 flex flex-col">
          {/* Search bar */}
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hidden sm:block">
              Add Student
            </button>
          </div>
          
          {/* Table with fixed height */}
          <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white sticky top-0 z-10">
                <tr>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>ID</span>
                      {getSortIcon('id')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Name</span>
                      {getSortIcon('name')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('className')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Class</span>
                      {getSortIcon('className')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('grade')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Grade</span>
                      {getSortIcon('grade')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('school')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>School</span>
                      {getSortIcon('school')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('attendance')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Attendance</span>
                      {getSortIcon('attendance')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                  >
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentStudents.length > 0 ? (
                  currentStudents.map((student) => (
                    <tr 
                      key={student.id}
                      className="hover:bg-purple-50 transition-colors duration-150 ease-in-out"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                              {student.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {student.className}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div 
                              className={`h-2.5 rounded-full ${
                                student.grade >= 90 ? 'bg-green-500' : 
                                student.grade >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${student.grade}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{student.grade}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {student.school}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getAttendanceStyle(student.attendance)}>
                          {student.attendance}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
  <label className="inline-flex items-center mr-4">
    <input type="radio" name="approval" value="approve" className="form-radio text-green-600" />
    <span className="ml-2">Approve</span>
  </label>
  <label className="inline-flex items-center">
    <input type="radio" name="approval" value="cancel" className="form-radio text-red-600" />
    <span className="ml-2">Cancel</span>
  </label>
</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
                      No students found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-auto">
            <div className="flex-1 flex justify-between sm:hidden">
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md 
                          ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md 
                          ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstStudent + 1}</span> to{" "}
                  <span className="font-medium">
                    {indexOfLastStudent > sortedStudents.length ? sortedStudents.length : indexOfLastStudent}
                  </span> of{" "}
                  <span className="font-medium">{sortedStudents.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button 
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium
                              ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {/* Generate page numbers */}
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium
                                ${currentPage === index + 1 
                                  ? 'bg-purple-600 border-purple-600 text-white' 
                                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium
                              ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentsPage;