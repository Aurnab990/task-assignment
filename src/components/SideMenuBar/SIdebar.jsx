import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [batchOpen, setBatchOpen] = useState(false);

  return (


    <div
      className={`bg-white text-black border-r-2 h-full p-3 flex flex-col justify-between transition-all duration-300 ${isOpen ? "w-48" : "w-28"
        }`}
    >
      <div>

        <div className="flex items-center justify-between">
          <h2 className={`text-lg ${!isOpen && "hidden"}`}>Teach</h2>
          <button className="bg-black p-2 rounded-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaArrowLeft size={12} /> : <FaArrowRight size={12} />}
          </button>
        </div>

        <ul className="mt-12 space-y-2">
          <li className="cursor-pointer hover:bg-blue-100 p-2 rounded-md">Dashboard</li>
          <li className="cursor-pointer" onClick={() => setBatchOpen(!batchOpen)}>
            <div className="flex items-center justify-between hover:bg-blue-100 p-2 rounded-md">
              <span>Manage Batch</span>
              {batchOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>
            {batchOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">All Batches</li>
                <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">Resources</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">My Earnings</li>
          <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">Timetable</li>
          <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">Analytics</li>
        </ul>
      </div>
      <div className="pb-3 mb-14">
        <ul className="space-y-2">
          <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">Manage Profile</li>
          <li className="cursor-pointer hover:bg-blue-200 p-2 rounded-md">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
