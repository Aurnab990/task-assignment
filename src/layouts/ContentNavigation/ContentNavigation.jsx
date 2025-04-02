import React from "react";
import { FaChevronRight, FaEllipsisV, FaEye, FaCaretDown } from "react-icons/fa";

const ContentNavigation = () => {
    return (
        <div className="px-5 py-2 flex justify-between items-center mt-2 text-sm">
            <div className="flex space-x-5">
                <div className="flex items-center space-x-2 underline font-semibold">
                    <span>Chapter 1</span>
                    <FaChevronRight size={12} />
                </div>
                <div className="flex items-center space-x-2 underline font-semibold">
                    <span>Chapter 11</span>
                    <FaChevronRight size={12} />
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Chapter 1</span>
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <button className="p-1 hover:text-gray-600">
                    <FaEllipsisV size={14} />
                </button>

                <div className="relative group">
                    <button className="px-2 py-1 bg-gray-200 border-2 text-black rounded-md text-xs flex items-center hover:bg-gray-300">
                        <FaEye className="mr-1" /> Access To <FaCaretDown className="ml-1" />
                    </button>
                    <div className="hidden group-hover:block absolute bg-white shadow-md rounded-md mt-1 w-28">
                        <ul className="text-sm">
                            <li className="px-2 py-1 hover:bg-gray-200 cursor-pointer">View</li>
                            <li className="px-2 py-1 hover:bg-gray-200 cursor-pointer">Edit</li>
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <button className="px-2 py-1 bg-gray-200 text-black rounded-md text-xs flex items-center hover:bg-gray-300">
                        Actions <FaCaretDown className="ml-1" />
                    </button>
                    <div className="hidden group-hover:block absolute bg-white shadow-md rounded-md mt-1 w-28">
                        <ul className="text-sm">
                            <li className="px-2 py-1 hover:bg-gray-200 cursor-pointer">Delete</li>
                            <li className="px-2 py-1 hover:bg-gray-200 cursor-pointer">Manage</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentNavigation;
