/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import residenceData from '../../utils/residence';
import reservationData from '../../utils/reservation';

const Reservation = () => {
  const handleDelete = () => {
    toast.success('Reservation successfully deleted');
  };

  return (
    <div className="w-screen md:w-full">
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="text-3xl font-bold uppercase">reservations</h2>
        <h4 className="text-xl text-gray-400">Select a reservation</h4>
        <div className="w-full md:w-11/12 lg:w-3/4">
          {reservationData.map((item) => {
            const residenceInfo = residenceData.find((residence) => residence.id === item.residence_id);
            return (
              <div key={item.id} className="flex flex-col items-center md:flex-row md:justify-between bg-white/30 shadow-lg shadow-black/40 py-3 px-2 rounded-lg mt-5 mx-10 sm:mx-20 md:mx-3 hover:scale-105 transition-all duration-200 delay-200">
                {/* residence image */}
                <div>
                  <img src={residenceInfo.image} alt="name" className="h-52 object-cover rounded-2xl" />
                </div>
                {/* reservation information & actions */}
                <div className="md:w-5/6 mt-3 md:mt-0">
                  {/* resevation info */}
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-semibold">{residenceInfo.name}</span>
                    <span className="text-md md:text-lg text-slate-700 font-medium">{`Check-in Date: ${item.check_in_date}`}</span>
                    <span className="text-md md:text-lg text-slate-700 font-medium">{`Check-out Date: ${item.check_out_date}`}</span>
                    <span className="text-lg text-slate-700 font-medium">
                      Guest Number:
                      {' '}
                      {item.guest_number}
                    </span>
                    <span className="text-lg font-semibold">
                      {`$ ${item.price}`}
                    </span>
                  </div>
                  {/* actions */}
                  <div className="flex justify-around pt-4">
                    <Link to={`edit/${item.id}`} className="capitalize hover:bg-orange-400 text-slate-800 tracking-wide hover:text-white hover:tracking-wider font-medium hover:font-semibold border-2 border-orange-400 px-3 py-2 rounded-lg transition-all duration-150 delay-200">
                      update
                    </Link>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="capitalize hover:bg-red-500 text-slate-800 tracking-wide hover:text-white hover:tracking-wider font-medium hover:font-semibold border-2 border-red-500 px-3 py-2 rounded-lg transition-all duration-150 delay-200"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
