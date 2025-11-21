import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    location: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND}/usercontact`, formdata);
      console.log(`${response.message} (${formdata.email})`);

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobilenumber: "",
        location: "",
      });
    } catch (error) {
      console.error("Error in post api:", error);
    }
  };

  // Background images
  const bgImages = [
    "illustration.jpg",
    "two-worker-making-gates-smithy.jpg",
    "illustration-construction-site.jpg",
    "construction-site-sunset.jpg",
    "black-white-scene-showcasing-life-construction-workers-site.jpg",
    "illustrationconstruction.jpg",
  ];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <>
      <div className="relative h-[100vh] w-full overflow-hidden">
        {/* Background slideshow */}
        {bgImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${image})`,
            }}
          ></div>
        ))}

        {/* Contact Form */}
        <div className="min-h-screen relative z-10 flex items-center justify-center font-semibold text-white">
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Contact <span className="text-yellow-400">Us</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formdata.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Mobile Number</label>
                <input
                  type="text"
                  name="mobilenumber"
                  placeholder="Enter your number"
                  value={formdata.mobilenumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formdata.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="px-6 md:px-16 py-16 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Office */}
          <div>
            <div className="w-30 h-3 bg-yellow-500 mb-3 rounded-e-lg "></div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Main Office</h2>
            <div className="border-2 px-5 border-yellow-400 rounded">
              <p className="mb-2"><strong>Address:</strong> 123 Anna Salai, Chennai, Tamil Nadu, India</p>
              <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
              <p className="mb-2"><strong>Email:</strong> info@company.com</p>
              <p className="mb-2"><strong>Working Hours:</strong> Mon - Sat (9AM - 6PM)</p>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Branches</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border-2 px-5 border-yellow-400 rounded">
                <p><strong>New York, USA:</strong> 45 Wall Street, NY</p>
                <p>+1 234 567 890 | ny@company.com</p>
              </div>
              <div className="border-2 px-5 border-yellow-400 rounded">
                <p><strong>London, UK:</strong> 221B Baker Street, London</p>
                <p>+44 20 7946 0958 | london@company.com</p>
              </div>
              <div className="border-2 px-5 border-yellow-400 rounded">
                <p><strong>Dubai, UAE:</strong> Downtown Business Bay</p>
                <p>+971 50 123 4567 | dubai@company.com</p>
              </div>
              <div className="border-2 px-5 border-yellow-400 rounded">
                <p><strong>Sydney, Australia:</strong> 15 George Street, Sydney</p>
                <p>+61 2 9876 5432 | sydney@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="px-6 md:px-16 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96"
            title="company-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.480276493661!2d80.27071831524194!3d13.082680890772073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d26b3a5f4f%3A0x53d4e0cb528ce0f9!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1692875538765!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>

     
    </>
  );
}

export default ContactComponents;
