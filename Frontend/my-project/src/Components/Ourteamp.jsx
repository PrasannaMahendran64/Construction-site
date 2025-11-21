import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Ourteam from "./Ourteam";
import mem1 from "../assets/Member/Team1.jpg";
import mem2 from "../assets/Member/Team2.jpg";
import mem3 from "../assets/Member/Team3.jpg";
import mem4 from "../assets/Member/Team4.jpg";

const projects = [
  {
    title: "Mr.Jaison",
    description:
      "A Senior Adviser in Construction plays a pivotal role in guiding complex projects, ensuring strategic alignment, and mitigating risks across all phases of construction.",
    category: "Interior",
    date: "Aug 2022",
    image: mem1,
  },
  {
    title: "Mr.Rocky Ragul",
    description:
      "A Project Manager in Construction is the mastermind behind the successful delivery of building projects—from skyscrapers to highways.",
    category: "Building",
    date: "Aug 2022",
    image: mem2,
  },
  {
    title: "Mr.Petter Prasanna",
    description:
      "A Safety Engineer is the guardian of workplace safety—especially critical in high-risk industries like construction, manufacturing, and energy.",
    category: "Complex",
    date: "Aug 2022",
    image: mem3,
  },
  {
    title: "Mr.Joke Muzza",
    description:
      "A Team Leader in Construction is the frontline commander who ensures that daily operations on-site run smoothly, safely, and efficiently.",
    category: "Repair",
    date: "Aug 2022",
    image: mem4,
  },
];

const Ourteamp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation duration & trigger only once
  }, []);

  return (
    <section className=" py-16 px-6">
      {/* Header */}
      <div className=" mb-12" data-aos="fade-up">
        <div className="w-30 h-3 bg-yellow-400 mb-3 rounded-e-lg "></div>
        <h2 className="text-5xl font-bold ">Our <span className="text-yellow-400">Team</span></h2>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl  ">
          We are not your average tech and management crew – we’re a bunch of
          passionate folks from India who eat, sleep, and dream tech innovation.
          Our team is a melting pot of talents, from tech wizards to project
          management maestros.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <Ourteam key={index} {...project} aosDelay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default Ourteamp;
