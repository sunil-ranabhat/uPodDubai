import React, { useState } from "react";

function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-gradient-to-t from-white to-[#f4f7fb] rounded-2xl p-6 border-4 border-white shadow-[0px_30px_30px_-20px_rgba(133,189,215,0.88)] mx-5">
        <div className="text-center font-extrabold text-xl text-[#1089D3]">
          {isSignUp ? "Sign Up" : "Sign In"}
        </div>
        <form action="" className="mt-6">
          <input
            required
            className="w-full bg-white p-4 rounded-2xl mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-[#12B1D1] border-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required
            className="w-full bg-white p-4 rounded-2xl mt-4 shadow-[0px_10px_10px_-5px_#cff0ff] focus:outline-none focus:border-[#12B1D1] border-transparent"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="w-full font-bold bg-gradient-to-r from-[#1089D3] to-[#12B1D1] text-white p-4 mt-6 rounded-2xl shadow-[0px_20px_10px_-15px_rgba(133,189,215,0.88)] hover:scale-105 hover:shadow-[0px_23px_10px_-20px_rgba(133,189,215,0.88)] active:scale-95 active:shadow-[0px_15px_10px_-10px_rgba(133,189,215,0.88)]"
            type="submit"
            value={isSignUp ? "Sign Up" : "Sign In"}
          />
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-[#AAAAAA]">
            Or Sign up with
          </span>
          <div className="flex justify-center gap-3 mt-2">
            {/* Google Button with Tooltip */}
            <div className="relative group">
              <button className="bg-gradient-to-r from-black to-[#707070] border-4 border-white p-2 rounded-full w-10 aspect-square flex items-center justify-center shadow-[0px_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-95">
                <svg
                  className="fill-white w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </button>
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Google
              </span>
            </div>

            {/* Apple Button with Tooltip */}
            <div className="relative group">
              <button className="bg-gradient-to-r from-black to-[#707070] border-4 border-white p-2 rounded-full w-10 aspect-square flex items-center justify-center shadow-[0px_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-95">
                <svg
                  className="fill-white w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
              </button>
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Apple
              </span>
            </div>

            {/* Facebook Button with Tooltip */}
            <div className="relative group">
              <button className="bg-gradient-to-r from-black to-[#707070] border-4 border-white p-2 rounded-full w-10 aspect-square flex items-center justify-center shadow-[0px_12px_10px_-8px_rgba(133,189,215,0.88)] hover:scale-110 active:scale-95">
                <svg
                  className="fill-white w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zm-2 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-5.8-2h-1.2v4.6h-2v-4.6H9.1-2.1.2-3.2v-2.4H16z" />
                </svg>
              </button>
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Facebook
              </span>
            </div>
          </div>
        </div>
        <span className="block text-center mt-5 text-xs">
          <a href="#" className="text-[#0099ff] no-underline">
            Learn user licence agreement
          </a>
        </span>
        <div className="mt-6 text-center">
          <span className="text-xs">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              className="text-[#0099ff] no-underline"
              onClick={toggleForm}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
