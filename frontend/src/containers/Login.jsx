import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.length !== 0 && password.length !== 0) {
      navigate('/residency');
      toast.success('Welcome back username');
    } else {
      toast.warning('Please enter your email address and password');
    }
  };

  return (
    <div className="bg-img-auth w-full h-screen bg-cover md:bg-center">
      <div className="w-full h-full bg-white/40 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-4xl text-center font-medium">Sign In</h2>
          <span className="text-[lg] text-center font-light tracking-wide">
            Welcome back! Sign in and rent your vacations
          </span>
          <form className="mt-4 flex flex-col items-center gap-5" onSubmit={handleLogin}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              className="w-80 h-9 border border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-80 h-9 border border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            />
            <button
              type="submit"
              className="bg-orange-400 w-fit px-9 py-2 rounded-xl text-white tracking-wide shadow-md hover:shadow-2xl"
            >
              Sign In
            </button>
          </form>
        </div>
        {/* new here */}
        <p className="absolute bottom-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
          {' '}
          <Link to="/sign-up" className="text-blue-100 underline transition-colors hover:text-orange-400">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
