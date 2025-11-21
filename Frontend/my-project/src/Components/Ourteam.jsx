import React from "react";

const Ourteam = ({ title, description, category, date, image, aosDelay }) => {
  return (
    <div
      className=" border border-yellow-500 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-54 object-fill rounded-t-2xl"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="text-lg font-light mt-3">{description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5 ">
          <span className="italic">{category}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
