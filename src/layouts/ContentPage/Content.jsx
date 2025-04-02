import React from "react";
import { FaFilePdf, FaEye, FaChevronUp, FaInfoCircle, FaFolder, FaUpload, FaPaste, FaFileAlt } from "react-icons/fa";

const contentData = [
  {
    name: "Chapter 1.1",
    type: "pdf",
    hasDetails: true,
    details: {
      createdOn: "March 15, 2024",
      generatedBy: "Sir",
      lastModified: "April 2, 2024",
      lastModifiedBy: "Sir",
      kind: "PDF",
      size: "12KB",
    },
  },
  {
    name: "Chapter 2 Revision Note.pdf",
    type: "pdf",
    hasDetails: false,
  },
];

const Content = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 h-screen overflow-auto"> 
      
      <div className="mt-4 space-y-4">
        {contentData.map((item, index) => (
          <div key={index} className="border p-4 rounded-md flex flex-col">
            
            <div className="flex">

              <div className={`flex items-center space-x-4 ${item.hasDetails ? "w-3/4" : "w-full"} pr-6`}>
                <input type="checkbox" className="w-5 h-5" />
                <FaFilePdf className="text-red-500 w-6 h-6" />
                <span className="font-bold underline">{item.name}</span>
                <FaChevronUp className="text-gray-500 ml-2" />

                <div className="ml-auto flex space-x-3">
                  <FaInfoCircle className="text-blue-500 cursor-pointer" />

                  <div className="relative group">
                    <button className="px-3 py-2 bg-white border border-black text-black rounded-md flex items-center hover:bg-gray-100">
                      <FaEye className="mr-1" /> Access To ▼
                    </button>
                  </div>

                  <div className="relative group">
                    <button className="px-3 py-2 bg-white border border-black text-black rounded-md flex items-center hover:bg-gray-100">
                      Actions ▼
                    </button>
                  </div>
                </div>
              </div>

              {item.hasDetails && (
                <div className="w-1/4 border-l bg-white pl-6 p-3 rounded-md">
                  <p><strong>Created On:</strong> {item.details.createdOn}</p>
                  <p><strong>Generated By:</strong> {item.details.generatedBy}</p>
                  <p><strong>Last Modified:</strong> {item.details.lastModified}</p>
                  <p><strong>Last Modified By:</strong> {item.details.lastModifiedBy}</p>
                  <p><strong>Kind:</strong> {item.details.kind}</p>
                  <p><strong>Size:</strong> {item.details.size}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-5 gap-2">
        <button className="flex items-center justify-center border border-gray-500 border-dotted bg-white text-gray-800 text-lg font-medium p-5 rounded-xl">
          <FaFolder className="mr-2" /> Add Folder
        </button>
        <button className="flex items-center justify-center border border-gray-500 border-dotted bg-white text-gray-800 text-lg font-medium py-3 rounded-xl">
          <FaUpload className="mr-2" /> Upload File
        </button>
        <button className="flex items-center justify-center border border-gray-500 border-dotted bg-white text-gray-800 text-lg font-medium py-3 rounded-xl">
          <FaFolder className="mr-2" /> Upload Folder
        </button>
        <button className="flex items-center justify-center border border-gray-500 border-dotted bg-white text-gray-800 text-lg font-medium py-3 rounded-xl">
          <FaFileAlt className="mr-2" /> Upload Text
        </button>
        <button className="flex items-center justify-center border border-gray-500 border-dotted bg-white text-gray-800 text-lg font-medium py-3 rounded-xl">
          <FaPaste className="mr-2" /> Paste
        </button>
      </div>
    </div>
  );
};

export default Content;
