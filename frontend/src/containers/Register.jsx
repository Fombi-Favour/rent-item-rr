import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (name.length !== 0 && image !== '' && email.length !== 0 && password.length !== 0) {
      navigate('/residency');
      toast.success(`Hello ${name}`);
    } else {
      toast.warning('Fill in all fields');
    }
  };

  return (
    <div className="bg-img-auth w-full h-screen bg-cover md:bg-center">
      <div className="w-full h-full bg-white/40 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-4xl text-center font-medium">Sign Up</h2>
          <span className="text-[lg] text-center font-light tracking-wide">
            👋 Hello there! Sign up and rent your vacations
          </span>
          <form className="mt-4 flex flex-col items-center gap-5" onSubmit={handleSignup}>
            {/* username */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="username"
              className="w-80 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            {/* image */}
            <div className="w-80 h-10 flex border-2 border-dashed border-orange-400 bg-white/20 rounded-2xl px-3">
              <input
                type="file"
                accept="image/*"
                onChange={({ target: { files } }) => {
                  // eslint-disable-next-line no-unused-expressions
                  files[0] && setFileName(files[0].name);
                  // converting the image to URL
                  if (files) {
                    const imageUrl = URL.createObjectURL(files[0]);
                    setImage(imageUrl);
                  }
                }}
                className="input-field"
                hidden
              />
              {image ? (
                <div className="flex items-center justify-between w-full px-4">
                  <span className="text-[15px]">
                    {fileName.length >= 20 ? fileName.slice(0, 15) : fileName}
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
                <div
                  aria-hidden="true"
                  className="flex items-center gap-2 w-full cursor-pointer"
                  onClick={() => document.querySelector('.input-field').click()}
                >
                  <MdCloudUpload className="text-orange-400" size={25} />
                  <span className="text-[13px]">Upload your profile photo</span>
                </div>
              )}
            </div>
            {/* email address */}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              className="w-80 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            {/* password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-80 h-9 border-2 border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            <button
              type="submit"
              className="bg-orange-400 w-fit px-9 py-2 rounded-xl text-white tracking-wide shadow-md hover:shadow-2xl"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* new here */}
        <p className="absolute bottom-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Already have an account?
          {' '}
          <Link to="/login" className="text-blue-100 underline transition-colors hover:text-orange-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
