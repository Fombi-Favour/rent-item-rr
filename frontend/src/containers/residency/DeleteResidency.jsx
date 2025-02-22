/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import residenceData from '../../utils/residence';
import DeleteModal from '../../components/DeleteModal';

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
    <>
      <div className="w-screen md:w-full">
        <div className="flex flex-col justify-center items-center mt-5">
          <h2 className="text-3xl font-bold uppercase">delete residencies</h2>
          <h4 className="text-xl text-gray-400">Select a residence to delete</h4>

          {/* listing */}
          <ul className="mt-10">
            <div className="md:h-[70vh] lg:h-full flex items-center justify-center">
              {residenceData.length === 0 ? (
                <div className="mt-6">
                  <img src={NotFound} alt="not-found" className="w-96" />
                  <h2 className="mt-4 text-center font-medium text-xl capitalize">No Residencies yet. Create one now!</h2>
                </div>
              ) : (
                <Slider {...settings} className="w-[20rem] md:w-[30rem] lg:w-[65rem]">
                  {residenceData.map((item) => (
                    <li key={item.id}>
                      <div>
                        <div className="flex justify-center">
                          <img src={item.image} alt={item.name} className="w-80 h-80 rounded-xl" />
                        </div>
                        <div className="flex flex-col items-center mt-3">
                          <span className="text-lg font-bold">
                            {item.name}
                          </span>
                          <span className="tracking-wide">
                            {item.location}
                          </span>
                          <span className="tracking-wide font-medium">
                            {`Price: $${item.price}`}
                          </span>
                        </div>
                        <DeleteModal />
                      </div>
                    </li>
                  ))}
                </Slider>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Residency;
