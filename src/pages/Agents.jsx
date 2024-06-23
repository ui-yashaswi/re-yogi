import React from "react";
import a1 from "../../public/gallery/agnt-1.jpg"
import a2 from "../../public/gallery/agnt-2.jpg"
import a3 from "../../public/gallery/agnt-3.jpg"
import a4 from "../../public/gallery/agnt-4.jpg"
import a5 from "../../public/gallery/agnt-5.jpg"

import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";

function Agents() {
  return (
    <div className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 px-10 py-20 bg-green-100">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl">Meet Our Agents</h1>
        <h1 className=" text-zinc-500">Our Agents are here to help you</h1>
      </div>

      <div className=" w-full h-full flex lg:flex-row flex-col justify-between gap-10">
        <div className="lg:w-60  w-full h-[45vh] overflow-hidden rounded-lg shadow-lg border-green-300 border ">
          <div className=" w-full h-60 relative">
            <img
              className=" w-full lg:h-60 h-[32vh]  object-cover"
              src={a1}
              alt=""
            />
            <div className=" h-38 text-white bg-slate-500 bg-opacity-30 absolute top-0 right-0 p-3 flex flex-col gap-5 ">
              <FaFacebookF size={16} />
              <IoLogoTwitter size={16} />
              <GrInstagram size={16} />
              <FaLinkedinIn size={16} />
            </div>
          </div>

          <div className="bg-white p-3 lg:h-24 h-48 flex flex-col justify-center items-center">
            <h1 className="text-zinc-600 font-semibold text-xl">Carls Jhons</h1>
            <h1 className="text-zinc-500 text-center text-md">
              Real Estate Agent
            </h1>
          </div>
        </div>

        <div className="lg:w-60  w-full h-[45vh] overflow-hidden rounded-lg shadow-lg border-green-300 border ">
          <div className=" w-full h-60 relative">
            <img
              className=" w-full lg:h-60 h-[32vh]  object-cover"
              src={a2}
              alt=""
            />
            <div className=" h-38 text-white bg-slate-500 bg-opacity-30 absolute top-0 right-0 p-3 flex flex-col gap-5 ">
              <FaFacebookF size={16} />
              <IoLogoTwitter size={16} />
              <GrInstagram size={16} />
              <FaLinkedinIn size={16} />
            </div>
          </div>

          <div className="bg-white p-3 lg:h-24 h-48 flex flex-col justify-center items-center">
            <h1 className="text-zinc-600 font-semibold text-xl">Carls Jhons</h1>
            <h1 className="text-zinc-500 text-center text-md">
              Real Estate Agent
            </h1>
          </div>
        </div>

        <div className="lg:w-60  w-full h-[45vh] overflow-hidden rounded-lg shadow-lg border-green-300 border ">
          <div className=" w-full h-60 relative">
            <img
              className=" w-full lg:h-60 h-[32vh]  object-cover"
              src={a3}
              alt=""
            />
            <div className=" h-38 text-white bg-slate-500 bg-opacity-30 absolute top-0 right-0 p-3 flex flex-col gap-5 ">
              <FaFacebookF size={16} />
              <IoLogoTwitter size={16} />
              <GrInstagram size={16} />
              <FaLinkedinIn size={16} />
            </div>
          </div>

          <div className="bg-white p-3 lg:h-24 h-48 flex flex-col justify-center items-center">
            <h1 className="text-zinc-600 font-semibold text-xl">Carls Jhons</h1>
            <h1 className="text-zinc-500 text-center text-md">
              Real Estate Agent
            </h1>
          </div>
        </div>

        <div className="lg:w-60  w-full h-[45vh] overflow-hidden rounded-lg shadow-lg border-green-300 border ">
          <div className=" w-full h-60 relative">
            <img
              className=" w-full lg:h-60 h-[32vh]  object-cover"
              src={a4}
              alt=""
            />
            <div className=" h-38 text-white bg-slate-500 bg-opacity-30 absolute top-0 right-0 p-3 flex flex-col gap-5 ">
              <FaFacebookF size={16} />
              <IoLogoTwitter size={16} />
              <GrInstagram size={16} />
              <FaLinkedinIn size={16} />
            </div>
          </div>

          <div className="bg-white p-3 lg:h-24 h-48 flex flex-col justify-center items-center">
            <h1 className="text-zinc-600 font-semibold text-xl">Carls Jhons</h1>
            <h1 className="text-zinc-500 text-center text-md">
              Real Estate Agent
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
