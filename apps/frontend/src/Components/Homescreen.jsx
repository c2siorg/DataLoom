// HomeScreen.js
import   { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileUpload, setFileUpload] = useState(null)
  const navigate = useNavigate();

  const handleNewProjectClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmitModal = (event) => {
    event.preventDefault();
    // pass file state to react table
    navigate('/data', {state: {file: fileUpload}});
    console.log("Submitted");
    setShowModal(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileUpload(file);
    console.log(file);
  };

  return (
    <div className="flex flex-col mr-64 mt-32 items-center min-h-screen bg-white  ">
      <div>
        <h1 className="text-5xl">
          Welcome to{" "}
          <span className="text-blue-600 font-semibold">DataLoom</span>,
        </h1>
        <h1 className="text-4xl mt-2">
          your one-stop for{" "}
          <span className="text-green-600 font-semibold">
            Dataset Transformations
          </span>
          .
        </h1>
      </div>
      <div className="mt-20 mr-32 grid grid-cols-2 gap-10 justify-start w-2/5 font-sans font-semibold">
        <button
          className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg"
          onClick={handleNewProjectClick}
        >
          New Project
        </button>
        <button className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg">
          Last Project 1
        </button>
        <button className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg">
          Last Project 2
        </button>
        <button className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg">
          Last Project 3
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-white rounded-lg p-8 z-50">
            <h2 className="text-2xl font-semibold mb-4">Project Name</h2>
            <input
              type="text"
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-text bg-gray-50 focus:outline-none mb-4"
              onChange={handleFileUpload}
            />
            <h2 className="text-2xl font-semibold mb-4">Upload Dataset</h2>
            <input
              type="file"
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
              onChange={handleFileUpload}
            />
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <input
              type="text"
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-text bg-gray-50 focus:outline-none mb-4"
              onChange={handleFileUpload}
            />
            <div className=" flex flex-row justify-between">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSubmitModal}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg "
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
