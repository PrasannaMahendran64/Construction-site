import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "We deliver innovative architectural solutions that combine creativity, sustainability, and functionality.",
    icon: "https://img.icons8.com/ios-filled/50/FAB005/architect.png",
  },
  {
    id: 2,
    title: "Construction Management",
    description:
      "Our expert team ensures seamless coordination, on-time delivery, and budget-friendly project execution.",
    icon: "https://img.icons8.com/ios-filled/50/f59e0b/crane.png",
  },
  {
    id: 3,
    title: "Interior Design",
    description:
      "Stylish, functional, and modern interiors that enhance comfort and reflect your personality.",
    icon: "https://img.icons8.com/ios-filled/50/FAB005/interior-design.png",
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    description:
      "Transform your spaces with our high-quality renovation services, blending the old with the new.",
    icon: "https://img.icons8.com/ink/48/FAB005/interior-design.png",
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "Every step undergoes strict quality checks to ensure durability, safety, and excellence.",
    icon: "https://img.icons8.com/ios-filled/50/eab308/checked.png",
  },
  {
    id: 6,
    title: "Smart Technology Integration",
    description:
      "We bring smart solutions like IoT, energy efficiency, and automation into modern construction.",
    icon: "https://img.icons8.com/ios-filled/50/FAB005/smart-home-automation.png",
  },
];

const Services = () => {
  return (
    <>
    
    <div
                className="relative h-[90vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept.jpg")`,
                }}
            >

               

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                        <h1 className="text-5xl font-bold drop-shadow-lg"> Our  <span className="text-yellow-500">Services</span></h1>
                        <p className="mt-4 max-w-2xl text-lg opacity-70">
                          We offer a wide range of professional construction and design services to
        bring your vision to life with excellence and innovation.
                        </p>
                    </div>
                
            </div>
    <div className="bg-gray-50 py-20 px-6">
     
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
};

export default Services;
