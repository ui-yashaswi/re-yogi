import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
    <div className="w-full   flex lg:flex-row flex-col  gap-10 items-center bg-[#303441] lg:px-32 px-10 py-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="lg:w-[25vw] w-full h-full flex flex-col gap-10 text-white">
          <IoHome size={62} className="text-green-300" />

          <h1 className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            incidunt architecto soluta laboriosam, perspiciatis, aspernatur
            officiis esse.
          </h1>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4 text-white">
              <MdLocationPin size={18} className="text-green-300" />
              <h1>95 South Park Avenue, USA</h1>
            </div>

            <div className="flex gap-4 text-white">
              <MdLocationPin size={18} className="text-green-300" />
              <h1>95 South Park Avenue, USA</h1>
            </div>

            <div className="flex gap-4 text-white">
              <MdLocationPin size={18} className="text-green-300" />
              <h1>95 South Park Avenue, USA</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[25vw] w-full h-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-white text-lg">Navigation</h1>
          <div className="w-20 h-[3px] bg-green-300"></div>
        </div>

        <div className="flex gap-10 pt-6">
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
            <h1 className="pb-2 border-b border-dotted hover:text-green-300 text-white text-[16px]">
              Agents Details
            </h1>
          </div>
        </div>
      </div>

      <div className=" lg:w-[25vw] w-full h-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-white text-lg ">Newsletters</h1>
          <div className="w-20 h-[3px] bg-green-300 mb-8"></div>
        </div>

        <h1 className="text-white">
          Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe
          to receive news in your inbox.
        </h1>

        <div className="lg:w-[25vw] w-full flex items-center border justify-center ">
          <input
            className=" px-9 py-5 bg-slate-100"
            placeholder="Enter Your mail"
            type="email"
          />

          <button className="bg-green-300 text-white px-6 py-5 flex items-center justify-center">
            SUBSCRIBE
          </button>
        </div>

        <div className=" flex gap-10 text-green-300 items-center justify-end pr-4">
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <AiFillInstagram size={20} />
          <IoLogoYoutube size={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer
