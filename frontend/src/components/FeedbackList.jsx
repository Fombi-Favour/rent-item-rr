import React from 'react';
import { FaStar } from 'react-icons/fa';
import feedback from '../utils/feedback';

const FeedbackList = () => (
  <div className="relative flex pb-6 px-5 overflow-x-hidden">
    <div className="inline-flex gap-6 animate-horizontal-scroll">
      {feedback.map((item) => {
        const stars = [];
        for (let i = 0; i < 5; i += 1) {
          stars.push(
            <FaStar
              key={i}
              className={i < item.rating ? 'text-yellow-400' : 'text-gray-400'}
            />,
          );
        }

        return (
          <div key={item.id} className="flex flex-col items-center gap-2 py-3 px-5 shadow-lg border w-96 rounded-2xl transition-all duration-200 hover:scale-110">
            <img src={item.image} alt={item.userName} className="w-12 h-12 rounded-full" />
            <h3 className="text-xl font-semibold text-gray-800">{item.userName}</h3>
            <p className="text-[13px] text-center text-gray-600">{item.text}</p>
            <div className="flex gap-1">{stars}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default FeedbackList;
