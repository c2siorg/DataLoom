//import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-400 flex p-4 ">
      <div className="text-black font-semibold text-lg flex items-center ml-10">
        DataLoom
      </div>
      {/* <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder=""
          className="w-full py-2 px-4 rounded-full focus:outline-none"
        />
      </div> */}
      <div className="ml-auto text-black items-end">
        <button className="bg-white rounded-full py-2 px-4">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
