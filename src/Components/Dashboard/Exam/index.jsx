import React from 'react';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../Sidebar';

const ExamManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    date: '',
    duration: '',
    type: 'Written'
  });
  
  const examsPerPage = 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allExams = [
    {
      id: 1,
      name: "Mid-Term Mathematics",
      subject: "Mathematics",
      date: "2023-11-15",
      duration: "120 min",
      type: "Written",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Biology Final",
      subject: "Biology",
      date: "2023-11-20",
      duration: "180 min",
      type: "Multiple Choice",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "History Quiz",
      subject: "History",
      date: "2023-11-05",
      duration: "45 min",
      type: "Written",
      status: "Completed",
    },
    {
      id: 4,
      name: "Physics Lab Test",
      subject: "Physics",
      date: "2023-11-18",
      duration: "90 min",
      type: "Practical",
      status: "Upcoming",
    },
    {
      id: 5,
      name: "English Literature Essay",
      subject: "English",
      date: "2023-11-22",
      duration: "120 min",
      type: "Written",
      status: "Upcoming",
    },
    {
      id: 6,
      name: "Computer Science Project",
      subject: "Computer Science",
      date: "2023-11-10",
      duration: "240 min",
      type: "Project",
      status: "Completed",
    },
    {
      id: 7,
      name: "Chemistry Lab Experiment",
      subject: "Chemistry",
      date: "2023-11-25",
      duration: "120 min",
      type: "Practical",
      status: "Upcoming",
    },
    {
      id: 8,
      name: "Geography Quiz",
      subject: "Geography",
      date: "2023-11-08",
      duration: "30 min",
      type: "Multiple Choice",
      status: "Completed",
    },
    {
      id: 9,
      name: "Art Portfolio Review",
      subject: "Art",
      date: "2023-11-30",
      duration: "60 min",
      type: "Practical",
      status: "Upcoming",
    },
    {
      id: 10,
      name: "Physical Education Assessment",
      subject: "Physical Education",
      date: "2023-11-12",
      duration: "90 min",
      type: "Practical",
      status: "Completed",
    },
  ];

  const filteredExams = allExams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExams = [...filteredExams].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastExam = currentPage * examsPerPage;
  const indexOfFirstExam = indexOfLastExam - examsPerPage;
  const currentExams = sortedExams.slice(indexOfFirstExam, indexOfLastExam);
  const totalPages = Math.ceil(sortedExams.length / examsPerPage);

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
    if (status.toLowerCase() === 'upcoming') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
    } else if (status.toLowerCase() === 'completed') {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800';
    } else {
      return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Exam created successfully!');
    // Reset form
    setFormData({
      name: '',
      subject: '',
      date: '',
      duration: '',
      type: 'Written'
    });
  };

  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-gray-50'>
      <Sidebar />
      <main className='mt-14 flex-1 p-4 sm:p-6 lg:p-8 flex flex-col'>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Exam Management</h1>
          <p className="text-gray-600">Create and manage all exams</p>
        </div>

        {/* Create New Exam Form */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8 p-6'>
          <h2 className='text-xl font-semibold mb-4 text-purple-800'>Create New Exam</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Exam Name</label>
              <input 
                type='text' 
                id='name' 
                value={formData.name}
                onChange={handleInputChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                placeholder='Enter exam name' 
                required 
              />
            </div>
            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>Subject</label>
              <input 
                type='text' 
                id='subject' 
                value={formData.subject}
                onChange={handleInputChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                placeholder='Enter subject name' 
                required 
              />
            </div>
            <div>
              <label htmlFor='date' className='block text-sm font-medium text-gray-700'>Date</label>
              <input 
                type='date' 
                id='date' 
                value={formData.date}
                onChange={handleInputChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                required 
              />
            </div>
            <div>
              <label htmlFor='duration' className='block text-sm font-medium text-gray-700'>Duration (minutes)</label>
              <input 
                type='number' 
                id='duration' 
                value={formData.duration}
                onChange={handleInputChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                placeholder='Enter duration in minutes' 
                required 
              />
            </div>
            <div>
              <label htmlFor='type' className='block text-sm font-medium text-gray-700'>Exam Type</label>
              <select 
                id='type' 
                value={formData.type}
                onChange={handleInputChange}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              >
                <option value='Written'>Written</option>
                <option value='Multiple Choice'>Multiple Choice</option>
                <option value='Practical'>Practical</option>
                <option value='Project'>Project</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button 
                type='submit' 
                className='w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition duration-200 ease-in-out font-medium'
              >
                Create Exam
              </button>
            </div>
          </form>
        </div>

        {/* Exams List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex-1 flex flex-col">
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <button className="ml-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out hidden sm:block">
              Export Data
            </button>
          </div>
          
          <div className="overflow-y-auto" style={{ maxHeight: '50vh' }}>
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
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Date</span>
                      {getSortIcon('date')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('duration')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Duration</span>
                      {getSortIcon('duration')}
                    </div>
                  </th>
                  <th 
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer hover:bg-purple-800 transition-colors"
                    onClick={() => handleSort('type')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Type</span>
                      {getSortIcon('type')}
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
                {currentExams.length > 0 ? (
                  currentExams.map((exam) => (
                    <tr 
                      key={exam.id}
                      className="hover:bg-purple-50 transition-colors duration-150 ease-in-out"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{exam.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                              {exam.subject.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {exam.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {exam.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {exam.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {exam.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={getStatusStyle(exam.status)}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-purple-600 hover:text-purple-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-10 text-center text-gray-500">
                      No exams found matching your search criteria
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
                  Showing <span className="font-medium">{indexOfFirstExam + 1}</span> to{" "}
                  <span className="font-medium">
                    {indexOfLastExam > sortedExams.length ? sortedExams.length : indexOfLastExam}
                  </span> of{" "}
                  <span className="font-medium">{sortedExams.length}</span> results
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

export default ExamManagementPage;