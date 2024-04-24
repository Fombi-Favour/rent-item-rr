import React from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import VideoBg from '../assets/vid.mp4';
import Land1 from '../assets/land-1.jpg';
import Navbar from '../components/Navbar';

import 'aos/dist/aos.css';
import FeedbackList from '../components/FeedbackList';

AOS.init();
const Home = () => (
  <div>
    {/* navbar + herosection */}
    <div className="w-full h-screen">
      {/* video background */}
      <div className="absolute top-0 left-0 bg-black/60 w-full h-full" />
      <video src={VideoBg} autoPlay loop muted className="w-full h-full object-cover" />
      {/* header section */}
      <header className="absolute top-0 text-white w-full h-full">
        <Navbar />
        <div className="flex flex-col gap-4 px-5 md:px-9 mt-48" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2500">
          <h2 className="font-bold text-4xl">
            Find housing
            <br />
            anywhere
          </h2>
          <span className="font-extralight">
            The offers for you at any point of your journey. Wherever you are,
            feel yourself like your own home.
          </span>
          <Link to="sign-up" className="hover:bg-orange-600 hover:border-none border-2 border-orange-600 transition duration-700 w-fit py-2 px-6 rounded-xl uppercase font-semibold tracking-wide">
            start free
          </Link>
        </div>
      </header>
    </div>
    {/* section 2 */}
    <div className="flex flex-col items-center p-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
      <span className="text-gray-500 uppercase font-semibold text-sm md:text-base">
        simple and fast way to rent
      </span>
      <p className="tracking-wider text-lg md:text-2xl font-medium">
        Comfortable home from reliable people
      </p>
    </div>
    {/* section 3 */}
    <div className="bg-[#dfebff] flex flex-col md:flex-row md:items-center gap-12 p-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
      <div className="shadow-xl">
        <img src={Land1} alt="land" className="w-[45rem] md:w-[60rem] rounded-2xl" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-gray-600 font-semibold">
          Only best places for your rest
        </h2>
        <span className="text-gray-500 font-light">
          More than then thousand houses are at your disposal. Only the best
          and checked managers. We will find best place for you and the conditions
          for a safe transactions and comfortable stay.
        </span>
        <Link to="sign-up" className="hover:bg-orange-600 hover:border-none hover:text-white text-gray-600 border-2 border-orange-600 transition duration-700 w-fit py-2 px-6 rounded-xl uppercase font-semibold tracking-wide">
          start free
        </Link>
      </div>
    </div>
    {/* testimonials */}
    <div>
      <div className="flex flex-col items-center p-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
        <span className="text-gray-500 uppercase font-semibold text-sm md:text-base">
          simple and fast way to rent
        </span>
        <p className="tracking-wider text-lg md:text-2xl font-medium">
          Comfortable home from reliable people
        </p>
      </div>
      <FeedbackList />
    </div>
  </div>
);

export default Home;
