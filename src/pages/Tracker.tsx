import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Tracker: React.FC = () => {
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
          <div className="flex items-center">
            <select className="p-2 border rounded mr-4">
              <option>North India Region</option>
              <option>South India Region</option>
              {/* Add more options as needed */}
            </select>
            <button className="bg-[#3C9D9B] text-white p-2 rounded">Submit for Approval</button>
          </div>
          <img src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" alt="Profile" className="ml-4 w-10 h-10 rounded-full" />
        </div>

        <div className="flex mb-4">
          <a href="/dashboard" className="mr-4 text-[#3C9D9B]">Data Entry</a>
          <a href="/tracker" className="text-[#3C9D9B]">Tracker</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-[#3C9D9B] text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">45/60</p>
              <p className="text-lg">Pending Trackers</p>
            </div>
            <div className="bg-[#3C9D9B] text-white p-4 rounded-lg">
              <p className="text-2xl font-bold">3</p>
              <p className="text-lg">Pending Reviews</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search for a business unit"
            className="p-2 w-full mb-4 border rounded"
          />
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Month</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Completion %</th>
                <th className="p-2 border">Business Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Jan 2023</td>
                <td className="p-2 border text-red-500">Pending Approval (1/12)</td>
                <td className="p-2 border">20%</td>
                <td className="p-2 border">Business Unit 1</td>
              </tr>
              <tr>
                <td className="p-2 border">Feb 2023</td>
                <td className="p-2 border text-green-500">Approved (2/12)</td>
                <td className="p-2 border">30%</td>
                <td className="p-2 border">Business Unit 1</td>
              </tr>
              <tr>
                <td className="p-2 border">Mar 2023</td>
                <td className="p-2 border text-orange-500">Incomplete (4/12)</td>
                <td className="p-2 border">50%</td>
                <td className="p-2 border">Business Unit 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
