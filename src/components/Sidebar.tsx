import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out bg-[#2C394B] text-white w-64 flex flex-col z-50`}
    >
      <button
        className="text-white p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        &#10005; {/* Cross icon */}
      </button>
      <div className="p-4">
        <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?rs=1&pid=ImgDetMain" alt="Logo" className="mb-8 w-24 mx-auto" />
        <nav>
          <ul>
            <li className="mb-4"><Link to="/dashboard" className="block p-2 hover:bg-[#3C9D9B]">Dashboard</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Entity Manager</Link></li>
            <li className="mb-4"><Link to="/tracker" className="block p-2 hover:bg-[#3C9D9B]">Data Manager</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Reporting</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Materiality</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Suppliers</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Analytics</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Targets</Link></li>
            <li className="mb-4"><Link to="#" className="block p-2 hover:bg-[#3C9D9B]">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
