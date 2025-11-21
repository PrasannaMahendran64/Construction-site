import HOME from "../assets/constraction.jpeg"
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/slide/img1.jpeg";
import img2 from "../assets/slide/img2.jpeg";
import img3 from "../assets/slide/img3.jpeg";
import img4 from "../assets/slide/img4.jpeg";
import team1 from "../assets/team/team1.jpeg";
import team2 from "../assets/team/team2.jpeg";
import team3 from "../assets/team/team3.jpeg";
import { Link } from "react-router";
import RecentProjects from "./Recentprojects";
import Testomonial from "./Customerfeedback";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgHome = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "6.jpg", "7.jpg"];
 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((pre) => (pre + 1) % bgHome.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgHome.length]);

  return (
    <>
      {/* ================= Hero Section ================= */}
      <div
        className="text-white min-h-screen px-4 sm:px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${bgHome[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left - Hero Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-yellow-500">I</span>f you can dream it, <br />{" "}
            <span className="text-yellow-500">W</span>e can build it!
          </h1>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Your Ideas & Dreams Are Transformed By Us Into Long-Lasting,
            Engineered Buildings.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              to={"/contact"}
              className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded-md hover:bg-yellow-600 transition text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <button className="border border-yellow-500 text-white px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-black transition text-sm sm:text-base">
              Free Consultation
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            <span className="text-red-500">*</span> All Our Projects Are Curated
            By Experts.
          </p>
        </div>

        {/* Right - Hero Image */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="absolute -top-4 lg:right-60 w-40 h-40 sm:w-30 sm:h-60 md:w-80 md:h-80 bg-yellow-500 rounded-lg"></div>

          <img
            src={HOME}
            alt="Engineer"
            className="relative rounded-2xl shadow-lg w-56 sm:w-72 md:w-[350px]"
          />

          <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-6 bg-black border border-yellow-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-center">
            <p className="text-lg sm:text-2xl font-bold text-white">200+</p>
            <p className="text-xs sm:text-sm text-gray-300">
              Capable Engineers
            </p>
          </div>
        </div>
      </div>

      {/* =================== About Section ================== */}
      <div className="bg-gradient-to-b from-gray-200 to-gray-100 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left - Images */}
            <div
              data-aos="fade-up-right"
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[img1, img2, img3, img4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="work"
                  className="h-36 sm:h-48 md:h-56 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              ))}
            </div>

            {/* Right - Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                Take A Glimpse Into Our <br /> Construction Voyage
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                A Trailblazer In The Construction Industry. Our Journey is one
                of passion, dedication, and relentless pursuit of excellence.
              </p>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl sm:text-2xl font-bold">600+</p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Worked With Big Companies
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">800+</p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">99%</p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Success Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecentProjects />

      {/* =================== Team Members ================== */}
      <div className="px-4 sm:px-6 mt-10">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-yellow-500">
          ______
        </h2>

        <p className="text-2xl sm:text-3xl font-bold mt-3">Team Members</p>
        <p className="text-gray-500 text-base sm:text-xl mt-2">
          Meet The Collaborative Minds Of Our Construction Team
        </p>

        {/* Roles */}
        <ul className="flex flex-wrap gap-2 sm:gap-4 mt-4">
          {[
            "Civil Engineers",
            "Architect",
            "Structural Engineer",
            "Interior Designer",
            "Project Manager",
          ].map((role, i) => (
            <li
              key={i}
              className="font-medium border px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-yellow-400 transition"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>

      {/* Team Members Grid */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6"
      >
        {[team1, team2, team3, team1, team2, team3].map((img, i) => (
          <div
            key={i}
            className="p-4 sm:p-5 flex items-center bg-white rounded-2xl shadow-sm"
          >
            <img
              src={img}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
            />
            <p className="ml-4 text-sm sm:text-lg font-semibold">
              {i % 2 === 0 ? "M.Jaison Boxer" : i % 3 === 0 ? "Rahul Krishnan" : "Prasanna"}{" "}
              <br />
              Civil Engineer
            </p>
          </div>
        ))}
      </div>

      <Testomonial />
    </>
  );
};

export default Home;
