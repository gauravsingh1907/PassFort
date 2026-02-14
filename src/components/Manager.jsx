import { useState } from "react";
import { RiFunctionAddFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);


  const showingpassword = () => {

    setShowPassword(prev => !prev)


  }



  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className=" max-w-7xl mx-auto mt-20 p-6 space-y-4">
        {/* title */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-mono font-bold text-white">
            <span className="text-violet-400">&lt;</span>
            Pass
            <span className="text-violet-400">Fort</span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              /&gt;
            </span>
          </h1>

          <p className="text-gray-400 text-sm tracking-wide">
            Secure your password forever
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter Website URL"
          className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter Username"
            className="flex-1 px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-70  px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={showingpassword}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>

          </div>
        </div>

        <button
          className=" flex gap-2 justify-center items-center mx-auto px-6 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 hover:cursor-pointer transition duration-300"
        >
          <RiFunctionAddFill />Save
        </button>
      </div>
    </>
  );
};

export default Manager;
