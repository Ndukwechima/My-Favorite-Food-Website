import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="lg:max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={20} />
        </div>
        <h1 className="text-[18px] sm:text-2xl lg:text-[22px] px-2">
          Best<span className="text-green-700 font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className=" bg-green-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="text-green-700" />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meal"
        ></input>
      </div>
      <button className="bg-green-700 text-white hidden md:flex items-center py-2 rounded-full border-none">
        <BsFillCartFill size={20} /> Cart
      </button>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          onClick={() => setSideNav(!sideNav)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h4 className="text-[18px] p-4">
          Best<span className="text-green-700 font-bold">Eats</span>
        </h4>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex  text-[16px]">
              <BsPerson className="mr-4 mt-[8px] text-white bg-black rounded-full" />
              <span> My Account</span>
            </li>
            <li className="text-xl py-4 flex  text-[16px]">
              <TbTruckReturn className="mr-4 mt-[8px] text-white bg-black rounded-full" />
              <span> Delivery</span>
            </li>

            <li className="text-xl py-4 flex  text-[16px]">
              <FaGoogleWallet className="mr-4 mt-[8px] text-white bg-black rounded-full" />
              <span> My Wallet</span>
            </li>
            <li className="text-xl py-4 flex  text-[16px]">
              <MdHelp className="mr-4 mt-[8px] text-white bg-black rounded-full" />
              <span>Help</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
