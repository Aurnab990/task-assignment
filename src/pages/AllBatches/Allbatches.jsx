import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Sidebar from '../../components/SideMenuBar/SIdebar';
import ContentNav from '../../components/ContentNavbar/ContentNav';

const Allbatches = () => {
    const [openCourses, setOpenCourses] = useState(false);
    const [openBatches, setOpenBatches] = useState(false);
    return (
        <div className="flex h-screen overflow-auto ">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-200 overflow-auto">
                <nav className="flex justify-between rounded-xl items-center p-4 shadow-md">

                    <div className="flex space-x-6">

                        <div className="relative border-r-2 border-black pr-6">
                            <button
                                className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                onClick={() => setOpenCourses(!openCourses)}
                            >
                                Courses for Chemistry {openCourses ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {openCourses && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md p-2">
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Organic Chemistry</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Inorganic Chemistry</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Physical Chemistry</li>
                                </ul>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                onClick={() => setOpenBatches(!openBatches)}
                            >
                                All Batches {openBatches ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {openBatches && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md p-2">
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Batch 1</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Batch 2</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Batch 3</li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-400">
                            Take Class
                        </button>

                        <div className="flex bg-white p-2 rounded-3xl -space-x-2">
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VbvTvQFYrD7AYI3IKB8rdP-vvYm2LkBl-w&s" alt="Profile 1" />
                            <img className="w-10 -ml-4 h-10 rounded-full border-2 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VbvTvQFYrD7AYI3IKB8rdP-vvYm2LkBl-w&s" alt="Profile 2" />
                            <h4 className="cursor-pointer mt-2 pl-3">Add TA </h4>
                        </div>
                    </div>
                </nav>
                <ContentNav />
            </div>
        </div>
    );
};

export default Allbatches;