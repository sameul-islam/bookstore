import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/website/abouthero.jpg"; 
import team1 from "../assets/website/team (1).webp";
import team2 from "../assets/website/team (2).webp";
import team3 from "../assets/website/team (3).webp";
import mission from "../assets/website/mission.jpg";
import { FaRegStar } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="w-[98%] md:w-[82%] mx-auto mt-10 mb-20 text-gray-800 dark:text-white">

      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={heroImg}
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">About Our Bookstore</h1>
          <p className="text-white text-lg md:text-xl max-w-[650px]">
            Books are not just stories, they are journeys that shape minds and inspire hearts. 
            Explore our curated collection and discover the joy of reading.
          </p>
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={mission}
            alt="Our Mission"
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Our mission is to connect readers with the stories that matter most.
            From timeless classics to latest bestsellers, we curate books that ignite imagination,
            inspire learning, and build a community of passionate readers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We aim to make book shopping simple, joyful, and accessible for everyone — everywhere.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold text-orange-500">10K+</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Happy Readers</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold text-orange-500">500+</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Books Available</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold text-orange-500">120+</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Authors</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-3xl font-bold items-center justify-center flex text-orange-500">5 <FaRegStar className="w-14"/></h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Customer Rating</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-orange-500">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[team1, team2, team3].map((img, idx) => (
            <div key={idx} className="text-center">
              <img
                src={img}
                alt={`Team member ${idx + 1}`}
                className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg border-4 border-orange-500"
              />
              <h3 className="mt-4 font-semibold text-lg">Team Member {idx + 1}</h3>
              <p className="text-gray-400 text-sm">Position</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Reading Community</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Explore thousands of books, connect with readers, and be part of our journey.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition shadow-md"
        >
          Explore Now
        </Link>
      </div>

    </div>
  );
};

export default AboutPage;
