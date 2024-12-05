import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import getCountries, { getCities } from '../../api/api_helper';

const AddResidency = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // hooks for the selected country and city
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const loadCountries = async () => {
    const countriesData = await getCountries();
    setCountries(countriesData);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  // handle country change
  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;
    // reset dependent selectors
    setSelectedCountry(countryCode);
    setSelectedCity('');

    // fetch cities for the selected country
    if (countryCode) {
      const citiesData = await getCities(countryCode);
      setCities(citiesData);
    } else {
      setCities([]);
    }
  };

  const handleAddResidency = (e) => {
    e.preventDefault();

    if (name.length !== 0 && image !== '' && selectedCountry !== '' && selectedCity !== '' && category !== '' && price.length !== 0 && description.length !== 0) {
      navigate('/residency');
      toast.success('Residency added successfully');
    } else {
      toast.warning('Fill in all fields');
    }
  };

  return (
    <div className="main-bg w-screen h-[89vh] md:h-screen md:w-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-700">
            Add a residence
          </h2>
          <form className="mt-3 flex flex-col items-center gap-5" onSubmit={handleAddResidency}>
            {/* name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name of residence"
              className="w-96 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            {/* image */}
            <div className="w-96 h-10 flex border-2 border-dashed border-orange-400 bg-white/20 rounded-2xl px-3">
              <input
                type="file"
                accept="image/*"
                onChange={({ target: { files } }) => {
                  // eslint-disable-next-line no-unused-expressions
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                }}
                className="input-field"
                hidden
              />
              {image ? (
                <div className="flex items-center justify-between w-full px-4">
                  <span className="text-[15px]">
                    {fileName.length >= 25 ? fileName.slice(0, 15) : fileName}
                  </span>
                  <MdDelete
                    className="text-orange-400 cursor-pointer"
                    size={25}
                    onClick={() => {
                      setFileName('Upload your profile photo');
                      setImage(null);
                    }}
                  />
                </div>
              ) : (
                <div aria-hidden="true" className="flex items-center gap-2 w-full cursor-pointer" onClick={() => document.querySelector('.input-field').click()}>
                  <MdCloudUpload className="input-field text-orange-400" size={25} />
                  <span className="text-[13px]">Upload residence photo</span>
                </div>
              )}
            </div>
            {/* location */}
            <div className="w-96 flex items-center gap-4">
              {/* country selection */}
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              >
                <option value="">Country</option>
                {countries.map((country) => (
                  <option
                    key={country.iso2}
                    value={country.iso2}
                  >
                    {country.emoji}
                    {' '}
                    {country.name}
                  </option>
                ))}
              </select>
              {/* city selection */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedCountry}
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              >
                <option value="">City</option>
                {cities.map((city) => (
                  <option
                    key={city.id}
                    value={city.id}
                  >
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            {/* category and price */}
            <div className="w-96 flex items-center gap-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              >
                <option value="#">Category</option>
                <option value="0">Hotel</option>
                <option value="1">Motel</option>
                <option value="2">Beach</option>
                <option value="3">Resort</option>
              </select>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                min={0}
                step="0.01"
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              />
            </div>
            {/* description */}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the residence..."
              className="w-96 h-32 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl py-1 px-3 resize-none placeholder:text-slate-700"
            />
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
};

export default AddResidency;
