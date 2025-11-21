
import React from 'react';

const ProjectCard = ({ title, description, category, date, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-110 transition-all transform duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>{category}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
