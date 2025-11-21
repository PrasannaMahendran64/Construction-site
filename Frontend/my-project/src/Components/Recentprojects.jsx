import React from 'react';
// import ProjectCard from './Projectcard';
// import asset from './assets/asset';
import asset from '../assets/asset';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router';
const projects = [
  {
    title: "Interiors Designs",
    description: "Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.",
    category: "Interior",
    date: "Aug 2022",
    image: asset.interior_design
  },
  {
    title: "Residential Building",
    description: "Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.",
    category: "Building",
    date: "Aug 2022",
    image: asset.modern
  },
  {
    title: "Commercial Complex",
    description: "Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.",
    category: "Complex",
    date: "Aug 2022",
    image: asset.commercial
  },
 {
    title: "Structural Repair",
    description: "Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.",
    category: "Repair",
    date: "Aug 2022",
    image: asset.structural
  },
];

const RecentProjects = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Recent Projects</h2>
        <Link to={"/projects"} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition">
          See All »
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
        <ProjectCard key={index} {...project}/>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
