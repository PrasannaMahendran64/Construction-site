import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutController = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Background slideshow
  const images = [
    "civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept.jpg",
    "factory-workers-protective-equipment-standing-production-hall-sharing-ideas.jpg",
    "female-engineers-working.jpg",
    "female.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      
      <div className="w-full">
        {/* Hero Section with slideshow */}
        <div className="relative h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 transition-all duration-1000" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              About <span className="text-yellow-500">Us</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg opacity-70">
              We are committed to building sustainable, innovative, and reliable
              construction solutions. Our expert team ensures every project meets
              the highest standards of safety and quality.
            </p>
          </div>
        </div>

        {/* About Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <p className="text-yellow-400 font-medium text-lg tracking-wide mb-3">
                Build with JPR
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                We Boast a <span className="text-yellow-400"> Decade of</span> <br />
                <span className="text-yellow-400">Expertise</span> in Constructing <br />
                Buildings.
              </h2>
              <div className="w-30 h-[10px] rounded-s-full rounded-e-full bg-yellow-500 mt-4 mb-6"></div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Constructions, the leading civil contractor in Chennai, was
                conceptualised with the vision to provide quality services at
                competitive prices. With over ten years of experience in the
                industry, the company has the technical proficiency and
                expertise to surpass client expectations.
              </p>
              <button className="mt-8 bg-yellow-400 text-white font-semibold px-6 py-3 rounded shadow hover:bg-orange-700 transition">
                Download Our Quote Now!
              </button>
            </div>

            {/* Right Image */}
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="flex justify-center"
            >
              <img
                src="buliding.jpg"
                alt="Bluemoon Construction"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <div className="mt-10 px-6 md:px-12 lg:px-20">
          <div className="w-30 h-3 bg-yellow-400 mb-3 rounded-e-full rounded-s-full"></div>
          <h1 className="text-5xl font-semibold drop-shadow-lg">Our Vision</h1>
          <p className="mt-5 text-gray-700">
            Take A Look At The Variety Of Services We Provide To Make Your Dreams
            a Reality
          </p>

          <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src="businessmen-hands-white-table-with-documents-drafts.jpg"
                alt="Project Planning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
                <p className="text-gray-600 text-sm">
                  Our expert engineers provide detailed project planning to
                  ensure efficient execution and cost-effectiveness.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src="side-view-employee-with-safety-equipment.jpg"
                alt="Safety First"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Safety is our priority — we follow strict guidelines to maintain
                  a secure working environment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src="person-using-ar-technology-their-daily-occupation.jpg"
                alt="Innovative Designs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Innovative Designs</h3>
                <p className="text-gray-600 text-sm">
                  We bring creativity and modern design solutions that blend
                  aesthetics with functionality.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src="factory-workers-protective-equipment-standing-production-hall-sharing-ideas.jpg"
                alt="Quality Assurance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Every project goes through rigorous quality checks to guarantee
                  durability and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutController;
