import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Ratings from '../components/Ratings';
import FeedBack from '../assets/feedback.png';

const Feedback = () => (
  <div className="bg-img-feedback w-full h-screen bg-cover md:bg-center px-3 md:px-6 pt-4">
    <Link
      to="/residency"
      className="text-white text-2xl border w-fit flex items-center p-2 rounded-full bg-orange-500 shadow-md shadow-black/25"
    >
      <FaArrowLeft />
    </Link>
    <section className="mt-6 flex flex-col md:flex-row shadow-lg shadow-black/30">
      {/* title + image */}
      <div className="md:bg-white/45 p-2 md:px-20 flex flex-col items-center md:rounded-l-2xl">
        <h2 className="text-4xl text-orange-500 font-semibold tracking-wide">
          Feel free to drop us your feedback.
        </h2>
        <img src={FeedBack} alt="feedback" className="hidden md:block" />
      </div>
      {/* feedback form */}
      <Ratings />
    </section>
  </div>
);

export default Feedback;
