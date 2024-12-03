/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

const AddResidency = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');

  return (
    <div className="main-bg w-screen h-[89vh] md:h-screen md:w-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-700">
            Add a residence
          </h2>
          <form className="mt-3 flex flex-col items-center gap-5">
            {/* name */}
            <input
              type="text"
              placeholder="Name of residence"
              className="w-96 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
              required
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
                required
              />
              {image ? (
                <div className="flex items-center px-4">
                  <span className="text-[15px]">{fileName}</span>
                  <MdDelete
                    className="text-orange-400 ml-32 cursor-pointer"
                    size={25}
                    onClick={() => {
                      setFileName('Upload your profile photo');
                      setImage(null);
                    }}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full cursor-pointer" onClick={() => document.querySelector('.input-field').click()}>
                  <MdCloudUpload className="input-field text-orange-400" size={25} />
                  <span className="text-[13px]">Upload residence photo</span>
                </div>
              )}
            </div>
            {/* location */}
            <div className="w-96 flex items-center gap-4">
              <input
                type="text"
                placeholder="Country"
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                required
              />
            </div>
            {/* category and price */}
            <div className="w-96 flex items-center gap-4">
              <select
                id=""
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
                placeholder="Price"
                min={0}
                step="0.01"
                className="w-1/2 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
                required
              />
            </div>
            {/* description */}
            <textarea
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
