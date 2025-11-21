import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import Footer from "./Footer";
import Navbar from "./Navbar";
const ProjectComponents = () => {
  const [projects, setProjects] = useState([]);



  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND}/showproject`)
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>


      <div className="mt-10">
        <div className="w-30 h-3 bg-yellow-500 mb-3 rounded-e-lg "></div>
        <h1 className="text-5xl font-semibold drop-shadow-lg">Our Projects</h1>
        <p className="mt-5 text-lg">Take A Look At The Variety Of Services We Provide To Make Your Dreams a Reality</p>
      </div>
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={`${import.meta.env.VITE_BACKEND}/files/${project.image}`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.design}</p>
              <p className="text-gray-400 text-xs mb-4">{project.date}</p>

              {/* Button */}
              <Link
                to={`/projects/${project.title ? project.title.replace(/\s+/g, "-") : ""}`}
                className="inline-block bg-yellow-400 px-4 py-2 rounded-lg text-white font-medium transition hover:bg-yellow-500 hover:shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>


    </>

  );
};



export default ProjectComponents


export const ProjectDetail = () => {
  const { title } = useParams();
  console.log("title param:", title);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const formattedTitle = decodeURIComponent(title).replace(/-/g, " ")
    axios
      .get(`${import.meta.env.VITE_BACKEND}/showprojects/title/${formattedTitle}`)
      .then((res) => setProject(res.data.data))
      .catch((err) => console.error(err));
  }, [title]);

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>

      <div className="max-w-4xl mx-auto my-12 p-8 bg-white border rounded-2xl shadow-2xl">

        <div className="relative w-full">
          <img
            src={`${import.meta.env.VITE_BACKEND}/files/${project.image}`}
            alt={project.title}
            className="w-full h-80 object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="text-center mt-6">
          <h1 className="text-4xl font-extrabold text-gray-800">{project.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{project.design}</p>
        </div>

        <div className="flex justify-center items-center gap-2 mt-4 text-gray-500">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/ios-filled/50/FAB005/calendar--v1.png"
            alt="calendar"
          />
          <span className="text-sm font-medium">{project.date}</span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Project Details</h3>
          <p className="text-gray-700 leading-relaxed mt-3">
            {project.details}
          </p>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block bg-yellow-400 px-6 py-3 rounded-xl text-white font-semibold text-lg shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-xl"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

    </>

  );
};
