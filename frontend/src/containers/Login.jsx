import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="bg-img-auth w-full h-screen bg-cover md:bg-center">
    <div className="w-full h-full bg-white/40 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl md:text-4xl text-center font-medium">Sign In</h2>
        <span className="text-[lg] text-center font-light tracking-wide">
          Welcome back! Sign in and rent for your vacations
        </span>
        <form className="mt-4 flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="email address"
            className="w-80 h-9 border border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="w-80 h-9 border border-orange-400 bg-white/20 outline-none rounded-2xl px-3 placeholder:text-slate-700"
            required
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

export default Login;
