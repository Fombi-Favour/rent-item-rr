/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import residenceData from '../../utils/residence';
import Residence from '../../components/Residence';

import NotFound from '../../assets/notfound.svg';

const Residency = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <TiChevronRightOutline color="#000" />,
    prevArrow: <TiChevronLeftOutline color="#000" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-screen md:w-full">
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="text-3xl font-bold uppercase">residencies</h2>
        <h4 className="text-xl text-gray-400">Select a residence</h4>

        {/* listing */}
        <div className="mt-10">
          <div className="md:h-[70vh] lg:h-full flex items-center justify-center">
            {residenceData.length === 0 ? (
              <div className="mt-6">
                <img src={NotFound} alt="not-found" className="w-96" />
                <h2 className="mt-4 text-center font-medium text-xl capitalize">No residence found</h2>
              </div>
            ) : (
              <Slider {...settings} className="w-[20rem] md:w-[30rem] lg:w-[65rem]">
                {residenceData.map((item) => (
                  <Link to={`${item.id}`} key={item.id}>
                    <Residence
                      name={item.name}
                      image={item.image}
                      location={item.location}
                      price={item.price}
                    />
                  </Link>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residency;
