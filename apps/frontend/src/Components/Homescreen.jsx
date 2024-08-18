
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uploadDataset, getRecentProjects, getDatasetDetails } from "../api.js";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [recentProjects, setRecentProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecentProjects();
  }, []);

  const fetchRecentProjects = async () => {
    try {
      const response = await getRecentProjects();
      setRecentProjects(response.data);
    } catch (error) {
      console.error("Error fetching recent projects:", error);
    }
  };

  const handleNewProjectClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitModal = async (event) => {
    event.preventDefault();

    if (!fileUpload) {
      alert("Please select a file to upload");
      return;
    }

    if (!projectName.trim()) {
      alert("Project Name cannot be empty");
      return;
    }

    if (!projectDescription.trim()) {
      alert("Project Description cannot be empty");
      return;
    }

     const formData = new FormData();
     formData.append("file", fileUpload);
     formData.append("projectName", projectName);
     formData.append("projectDescription", projectDescription);

    try {
      const data = await uploadDataset(
        fileUpload,
        projectName,
        projectDescription
      );
      console.log("Backend response data:", data);

      const datasetId = data.dataset_id;
      console.log("Dataset ID:", datasetId);

      if (datasetId) {
        navigate("/data", { state: { datasetId, apiData: data } });
        console.log(
          "Navigating to data screen with datasetId and the data:",
          datasetId,
          data
        );
      } else {
        console.error("Dataset ID is undefined.");
        alert("Error: Dataset ID is undefined.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }

    setShowModal(false);
    fetchRecentProjects(); // Refresh the recent projects list
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileUpload(file);
    console.log(file);
  };

  const handleRecentProjectClick = async (datasetId) => {
    try {
      // Fetch dataset details
      const data = await getDatasetDetails(datasetId);
      console.log("Dataset details:", data);

      // Navigate to the data screen with the fetched data
      navigate("/data", { state: { datasetId, apiData: data } });
    } catch (error) {
      console.error("Error fetching dataset details:", error);
      alert("Error fetching dataset details. Please try again.");
    }
  };


  // Default project names for buttons if there are less than 3 recent projects
  const defaultProjectNames = ["No Project", "No Project", "No Project"];
  const projectNames = recentProjects
    .map((project) => project.name)
    .concat(defaultProjectNames)
    .slice(0, 3);

  return (
    <div className="flex flex-col mr-64 mt-32 items-center min-h-screen bg-white">
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
        <button
          className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg"
          onClick={() =>
            handleRecentProjectClick(recentProjects[0]?.dataset_id)
          }
        >
          {projectNames[0]}
        </button>
        <button
          className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg"
          onClick={() =>
            handleRecentProjectClick(recentProjects[1]?.dataset_id)
          }
        >
          {projectNames[1]}
        </button>
        <button
          className="px-2 py-4 bg-gradient-to-r from-green-400 hover:bg-blue-600 rounded-lg shadow-lg"
          onClick={() =>
            handleRecentProjectClick(recentProjects[2]?.dataset_id)
          }
        >
          {projectNames[2]}
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
              onChange={(e) => setProjectName(e.target.value)}
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
              onChange={(e) => setProjectDescription(e.target.value)}
            />
            <div className="flex flex-row justify-between">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSubmitModal}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
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
