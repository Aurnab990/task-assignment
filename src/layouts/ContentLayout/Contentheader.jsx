import React, { useState } from "react";
import { FaPlus, FaEllipsisV, FaEdit, FaTrash, FaSyncAlt, FaCog } from "react-icons/fa";
import ContentNavigation from "../ContentNavigation/ContentNavigation";


const ContentHeader = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="max-w-full">
      <div className="border-b-2 px-3 py-2 flex justify-between items-center mt-3 text-sm">
        <div className="flex space-x-5">
          <button
            className="px-2 text-black font-medium hover:border-b-2 hover:border-black"
            onClick={() => setShowNav(!showNav)}
          >
            Content
          </button>
          <button className="px-2 text-black font-medium hover:border-b-2 hover:border-black">
            Course Details
          </button>
          <button className="px-2 text-black font-medium hover:border-b-2 hover:border-black">
            Revisions
          </button>
          <button className="flex items-center px-2 py-1 text-gray-400 rounded-md text-xs hover:bg-gray-200">
            <FaPlus className="mr-1 border-2 border-black w-4 h-4 rounded-full bg-black text-white" size={12} />
            Add Main Folder
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 border rounded-md text-xs w-32 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="p-1 hover:text-gray-600">
            <FaEllipsisV size={14} />
          </button>
          <button className="p-1 hover:text-blue-500">
            <FaEdit size={14} />
          </button>
          <button className="p-1 hover:text-red-500">
            <FaTrash size={14} />
          </button>
          <button className="p-1 hover:text-green-500">
            <FaSyncAlt size={14} />
          </button>
          <button className="p-1 hover:text-gray-700">
            <FaCog size={14} />
          </button>
        </div>
      </div>
      {showNav && <ContentNavigation />}
    </div>
  );
};

export default ContentHeader;
