import React from "react";
import { Link } from "react-router-dom";
import icon from "../../img/icon.png";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen  bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left border-2 rounded border-neutral-600 bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex  justify-center">
            <img src={icon} className="h-14 my-3" alt="" />
          </div>

          <form action="">
            <div className="mt-4 ">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-2 py-2 mt-2 border-b-2 focus:border-b-0 focus:rounded-md border-slate-300   focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="UserName or  Email"
                  className="w-full px-2 py-2 mt-2 border-b-2 focus:border-b-0 focus:rounded-md border-slate-300   focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <input
                  type="date"
                  placeholder="UserName or  Email"
                  className="w-full px-2 py-2 mt-2 border-b-2 focus:border-b-0 focus:rounded-md border-slate-300   focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-2 py-2 mt-2 border-b-2 focus:border-b-0 focus:rounded-md border-slate-300   focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-2 py-2 mt-2 border-b-2 focus:border-b-0 focus:rounded-md border-slate-300   focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <span className="text-xs text-red-400">Password must be same!</span>
              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-yellow-800 rounded-lg hover:bg-blue-900">
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link to="/" className="text-blue-600 hover:underline" href="#">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
