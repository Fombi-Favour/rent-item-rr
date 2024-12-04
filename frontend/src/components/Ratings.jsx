import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Ratings = () => {
  const [rateValue, setRateValue] = useState(0);

  return (
    <div className="bg-white w-full py-4 px-6 md:rounded-r-2xl">
      <FaStar className="text-xl text-yellow-400" />
      {/* rating */}
      <div className="mt-4 flex flex-col items-center">
        <span className="text-xl text-slate-800 font-semibold">
          How satisfied are you with the support of our services?
        </span>
        <ul className="grid grid-cols-5 gap-5 mt-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <li
              key={item}
              onClick={() => setRateValue(item)}
              aria-hidden="true"
              className={`grid place-content-center h-12 w-12 rounded-full cursor-pointer transition-all ${
                item === rateValue
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:bg-white hover:text-orange-500 bg-zinc-900 hover:shadow-md hover:shadow-black/20'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* reasons */}
        <textarea
          placeholder="Please tell us your reason for giving this score here.."
          className="w-full h-40 border mt-5 bg-orange-100 outline-none rounded-2xl shadow-md shadow-black/30 py-1 px-3 resize-none placeholder:text-slate-500"
        />
        {/* button */}
        <button
          type="button"
          className="mt-3 w-full h-12 bg-orange-400 capitalize text-white text-lg font-semibold rounded-xl transition-all hover:shadow-sm hover:shadow-black/35"
        >
          send feedback
        </button>
      </div>
    </div>
  );
};

export default Ratings;
