/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import residenceData from '../../utils/residence';

const AddReservation = () => (
  <div className="main-bg w-screen h-[89vh] md:h-screen md:w-full">
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-700">
          Book a reservation
        </h2>
        <form className="mt-3 flex flex-col items-center gap-5 mx-3">
          {/* residence */}
          <select
            id=""
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
                className="h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                required
              />
            </div>
            {/* check-out date */}
            <div className="w-1/2 flex flex-col">
              <label className="text-grey-500 font-semibold">Check-out date</label>
              <input
                type="date"
                className="h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                required
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
              placeholder="Number of guest"
              className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              required
            />
            {/* total price (disabled) */}
            <input
              type="number"
              placeholder="Total Price: $1200"
              disabled
              className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 w-fit px-9 py-2 rounded-xl text-white tracking-wide shadow-md hover:shadow-lg"
            required
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default AddReservation;
