import React from "react";
import { GoPersonFill } from "react-icons/go";
import { BiSolidBellRing } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-white border-b-2 text-black">

      <div>
        <h1 className="text-2xl">Teacher's Center</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-6">
          <h4 className="cursor-pointer hover:text-gray-400"><GoPersonFill size={20} /></h4>
          <h4 className="cursor-pointer hover:text-gray-400"><BiSolidBellRing size={20}/></h4>
        </div>

        <div className="h-8 w-[2px] bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VbvTvQFYrD7AYI3IKB8rdP-vvYm2LkBl-w&s"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h4 className="text-sm font-semibold">Sir 1</h4>
            <span className="flex gap-4 text-sm text-gray-500">
              <h4>Chemistry</h4>
              <div className="h-5 w-[2px] bg-gray-200"></div>
              <h4>Level 3</h4>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
