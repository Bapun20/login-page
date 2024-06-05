import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 p-8 bg-[#F5F7FA] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        <button
          className="text-[#2C394B] p-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <select className="p-2 border rounded mr-4">
              <option>North India Region</option>
              <option>South India Region</option>
              {/* Add more options as needed */}
            </select>
            <select className="p-2 border rounded mr-4">
              <option>FY 2023-24</option>
              <option>FY 2022-23</option>
              {/* Add more options as needed */}
            </select>
            <button className="bg-[#3C9D9B] text-white p-2 rounded">Submit for Approval</button>
            <img src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" alt="Profile" className="ml-4 w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex mb-4">
            <a href="/dashboard" className="mr-4 text-[#3C9D9B]">Data Entry</a>
            <a href="/tracker" className="text-[#3C9D9B]">Tracker</a>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Assessment Title</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">No. of Suppliers</th>
                <th className="p-2 border">Score</th>
                <th className="p-2 border">Risk Classification</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Result</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Assessment 1</td>
                <td className="p-2 border">BRSR</td>
                <td className="p-2 border">20</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">Medium</td>
                <td className="p-2 border text-red-500">Pending</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"><button className="text-[#3C9D9B]">View</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Assessment 2</td>
                <td className="p-2 border">BRSR</td>
                <td className="p-2 border">25</td>
                <td className="p-2 border">98</td>
                <td className="p-2 border">Low</td>
                <td className="p-2 border text-green-500">Complete</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"><button className="text-[#3C9D9B]">View</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Assessment 3</td>
                <td className="p-2 border">BRSR</td>
                <td className="p-2 border">35</td>
                <td className="p-2 border">22</td>
                <td className="p-2 border">High</td>
                <td className="p-2 border text-green-500">Complete</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"><button className="text-[#3C9D9B]">View</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Assessment 4</td>
                <td className="p-2 border">Custom</td>
                <td className="p-2 border">49</td>
                <td className="p-2 border">23</td>
                <td className="p-2 border">Medium</td>
                <td className="p-2 border text-green-500">Complete</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"><button className="text-[#3C9D9B]">View</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Assessment 5</td>
                <td className="p-2 border">Custom</td>
                <td className="p-2 border">100</td>
                <td className="p-2 border">42</td>
                <td className="p-2 border">Medium</td>
                <td className="p-2 border text-green-500">Complete</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"><button className="text-[#3C9D9B]">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
