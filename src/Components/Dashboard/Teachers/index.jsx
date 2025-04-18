import React from 'react';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../Sidebar';

const TeachersPage = () => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 3; 

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allTeachers = [
    {
      id: 1,
      name: "Alice Johnson",
      subject: "Mathematics",
      experience: 5,
      school: "School 1",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Brown",
      subject: "Science",
      experience: 8,
      school: "School 1",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Charlie Davis",
      subject: "History",
      experience: 10,
      school: "School 2",
      status: "Active",
    },
    {
      id: 4,
      name: "David Edwards",
      subject: "English",
      experience: 12,
      school: "School 2",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Eve Franklin",
      subject: "Computer Science",
      experience: 15,
      school: "School 3",
      status: "Active",
    },
    {
      id: 6,
      name: "Florence Garcia",
      subject: "Biology",
      experience: 11,
      school: "School 3",
      status: "Inactive",
    },
    {
      id: 7,
      name: "George Hernandez",
      subject: "Physics",
      experience: 9,
      school: "School 4",
      status: "Active",
    },
    {
      id: 8,
      name: "Hannah Jackson",
      subject: "Chemistry",
      experience: 7,
      school: "School 4",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Isaac Kim",
      subject: "Mathematics",
      experience: 4,
      school: "School 5",
      status: "Active",
    },
    {
      id: 10,
      name: "Julia Lee",
      subject: "History",
      experience: 6,
      school: "School 5",
      status: "Inactive",
    },
    {
      id: 11,
      name: "Kevin Martin",
      subject: "Computer Science",
      experience: 3,
      school: "School 6",
      status: "Active",
    },
    {
      id: 12,
      name: "Lily Nguyen",
      subject: "English",
      experience: 2,
      school: "School 6",
      status: "Inactive",
    },
    {
      id: 13,
      name: "Matthew Parker",
      subject: "Biology",
      experience: 1,
      school: "School 7",
      status: "Active",
    },
    {
      id: 14,
      name: "Natalie Ramirez",
      subject: "Physics",
      experience: 14,
      school: "School 7",
      status: "Inactive",
    },
    {
      id: 15,
      name: "Olivia Rodriguez",
      subject: "Chemistry",
      experience: 13,
      school: "School 8",
      status: "Active",
    },
    {
      id: 16,
      name: "Pamela Sanchez",
      subject: "Mathematics",
      experience: 16,
      school: "School 8",
      status: "Inactive",
    },
    {
      id: 17,
      name: "Quincy Taylor",
      subject: "History",
      experience: 17,
      school: "School 9",
      status: "Active",
    },
    {
      id: 18,
      name: "Rachel Vasquez",
      subject: "Computer Science",
      experience: 18,
      school: "School 9",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Sophia Walker",
      subject: "English",
      experience: 19,
      school: "School 10",
      status: "Active",
    },
    {
      id: 20,
      name: "Tessa Wallace",
      subject: "Biology",
      experience: 20,
      school: "School 10",
      status: "Inactive",
    },
    {
      id: 21,
      name: "Ursula White",
      subject: "Physics",
      experience: 21,
      school: "School 11",
      status: "Active",
    },
    {
      id: 22,
      name: "Victoria Williams",
      subject: "Chemistry",
      experience: 22,
      school: "School 11",
      status: "Inactive",
    },
  ];

  const filteredTeachers = allTeachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTeachers = [...filteredTeachers].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = sortedTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);
  const totalPages = Math.ceil(sortedTeachers.length / teachersPerPage);

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

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  const getStatusStyle = (status) => {
    if (status.toLowerCase() === 'active') {
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
          <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
          <p className="text-gray-600">Manage and view all teachers</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex-1 flex flex-col">
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hidden sm:block">
              Add Teacher
            </button>
          </div>
          
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
                    onClick={() => handleSort('subject')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Subject</span>
                      {getSortIcon('subject')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('experience')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Experience</span>
                      {getSortIcon('experience')}
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
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Status</span>
                      {getSortIcon('status')}
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
                {currentTeachers.length > 0 ? (
                  currentTeachers.map((teacher) => (
                    <tr 
                      key={teacher.id}
                      className="hover:bg-purple-50 transition-colors duration-150 ease-in-out"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{teacher.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                              {teacher.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {teacher.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {teacher.experience} years
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {teacher.school}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getStatusStyle(teacher.status)}>
                          {teacher.status}
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
                      No teachers found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
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
                  Showing <span className="font-medium">{indexOfFirstTeacher + 1}</span> to{" "}
                  <span className="font-medium">
                    {indexOfLastTeacher > sortedTeachers.length ? sortedTeachers.length : indexOfLastTeacher}
                  </span> of{" "}
                  <span className="font-medium">{sortedTeachers.length}</span> results
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

export default TeachersPage;
