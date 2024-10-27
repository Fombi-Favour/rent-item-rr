import React from 'react';
import PropTypes from 'prop-types';

const Residence = ({
  name, image, location, price,
}) => (
  <div className="transition-all duration-200 hover:scale-95 hover:delay-100">
    <div className="flex justify-center">
      <img src={image} alt={name} className="w-80 h-80 rounded-xl" />
    </div>
    <div className="flex flex-col items-center mt-3">
      <span className="text-lg font-bold">
        {name}
      </span>
      <span className="tracking-wide">
        {location}
      </span>
      <span className="tracking-wide font-medium">
        {`Price: $${price}`}
      </span>
    </div>
  </div>
);

Residence.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Residence;
