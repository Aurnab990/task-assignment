import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import DisplayContent from "../../layouts/DisplayContent/DisplayContent";

const ContentNav = () => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4 shadow-md rounded-xl">
        <div className="flex space-x-4">
          <button className="px-4 py-1 text-blue-500 font-semibold rounded-lg hover:border-b-2 hover:border-blue-500">
            Students
          </button>
          <button className="px-4 py-1 text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500">
            Announcements
          </button>
          <button className="px-4 py-1 text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500">
            Material
          </button>
          <button className="px-4 py-1 text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500">
            Homework
          </button>
          <button className="px-4 py-1 text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500">
            Attendance
          </button>
          <button className="px-4 py-1 text-blue-500 font-semibold hover:border-b-2 hover:border-blue-500">
            Discussion
          </button>
          <button className="px-1 py-1 text-blue-500 font-semibold rounded-2xl border-2 border-black hover:border-blue-500">
            <BsThreeDots size={18} />
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full hover:bg-red-600">
            <RiDeleteBin5Line size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-blue-600">
            <LuDownload size={20} />
          </button>
        </div>
      </nav>
      <DisplayContent />
    </div>
  );
};

export default ContentNav;
