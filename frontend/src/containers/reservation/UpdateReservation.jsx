/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import residenceData from '../../utils/residence';
import reservationData from '../../utils/reservation';

const UpdateReservation = () => {
  // const [resName, setResName] = useState(null);
  // const [inDate, setInDate] = useState(null);
  // const [outDate, setOutDate] = useState(null);
  // const [guest, setGuest] = useState(0);
  // const [total, setTotal] = useState(0);

  const { reservationId } = useParams();

  const reservation = reservationData.find((item) => item.id === parseInt(reservationId, 10));
  const specificResidence = residenceData.find((residence) => residence.id === reservation.residence_id);

  // const handleResidencyChange = (e) => {
  //   let residencyName = specificResidence.name;
  //   residencyName = e.target.value;
  //   setResName(residencyName);
  // };

  return (
    <div className="main-bg w-screen h-[89vh] md:h-screen md:w-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-700">
            Update reservation
          </h2>
          <form className="mt-3 flex flex-col items-center gap-5 mx-3">
            {/* residence */}
            <select
              value={specificResidence.name}
              // onChange={handleResidencyChange}
              className="w-full h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            >
              <option value="#">Residence Name</option>
              {residenceData.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
            {/* dates */}
            <div className="flex items-center gap-4 w-full">
              {/* check-in date */}
              <div className="w-1/2 flex flex-col">
                <label className="text-grey-500 font-semibold">Check-in date</label>
                <input
                  type="date"
                  value={reservation.check_in_date}
                  className="h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                />
              </div>
              {/* check-out date */}
              <div className="w-1/2 flex flex-col">
                <label className="text-grey-500 font-semibold">Check-out date</label>
                <input
                  type="date"
                  value={reservation.check_out_date}
                  className="h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                />
              </div>
            </div>
            {/* extras */}
            <div className="flex items-center gap-4">
              {/* number of guest */}
              <input
                type="number"
                min={0}
                step={1}
                value={reservation.guest_number}
                placeholder="Number of guest"
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              />
              {/* total price (disabled) */}
              <input
                type="number"
                placeholder="Total Price: $1200"
                disabled
                value={reservation.price}
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-400 w-fit px-9 py-2 rounded-xl text-white tracking-wide shadow-md hover:shadow-lg"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReservation;
