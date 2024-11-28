/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaLocationArrow } from 'react-icons/fa';
import residenceData from '../../utils/residence';

import NotFound from '../../assets/notfound.svg';

const ResidencyDetails = () => {
  const { residenceId } = useParams();

  const residence = residenceData.find((item) => item.id === parseInt(residenceId, 10));

  return (
    <div className="w-screen md:w-full">
      <div className="pt-5 pb-3 px-3">
        <Link to="/residency" className="text-white text-2xl border w-fit flex items-center p-2 rounded-full bg-orange-500 shadow-md">
          <FaArrowLeft />
        </Link>

        {!residence ? (
          <div className="mt-24 flex flex-col items-center ml-32 md:ml-0">
            <img src={NotFound} alt="not-found" className="w-96" />
            <h2 className="mt-4 font-medium text-xl capitalize">Residence not found</h2>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex justify-center">
              <img src={residence.image} alt={residence.name} className="w-screen h-96 object-cover rounded-3xl" />
            </div>
            {/* edit this section later!!! */}
            <div>
              {/* main details */}
              <div>
                <div className="flex justify-between px-1 py-3">
                  <h2 className="text-2xl font-semibold tracking-wide">{residence.name}</h2>
                  <h4 className="text-2xl font-medium tracking-wide">{`$${residence.price}`}</h4>
                </div>
                <p className="text-[15px] text-slate-500 leading-6">{residence.description}</p>
                <p className="flex items-center gap-2 py-2">
                  {/* change location icon later!!! */}
                  <FaLocationArrow />
                  <span className="text-gray-800">{residence.location}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidencyDetails;
