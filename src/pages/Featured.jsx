import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { TiLocationOutline } from "react-icons/ti";
import { LiaShareAltSolid } from "react-icons/lia";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineShare } from "react-icons/md";
import fp1 from "/gallery/fp-1.jpg";

function Featured() {
  return (
    <div className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 px-10 py-20 bg-slate-100 ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl">
          Featured Properties
        </h1>
        <h1 className=" text-zinc-500">These are our featured properties</h1>
      </div>

      {/* ................cards............ */}

      <div className=" w-full h-full flex lg:flex-row flex-col justify-between gap-10">
        {/* ..................card1............................ */}

        <div className=" w-full  border-2 boder-zinc-200 shadow-lg rounded-lg overflow-hidden bg-white justify-between h-full lg:h-[40vh]  flex lg:flex-row flex-col items-center ">
          <img
            className="w-full lg:w-[20vw] h-full object-cover"
            src={fp1}
            alt=""
          />

          <div className=" w-full h-full p-6  flex flex-col">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium text-zinc-600 hover:text-green-400">
                  Real Luxury Family House Villa
                </h1>

                <div className="flex text-zinc-500 text-[13px] gap-2 items-center ">
                  <TiLocationOutline size={18} />
                  <h1>Est St, 77 - Central Park South, NYC</h1>
                </div>
              </div>

              <div className=" w-full h-full flex pb-6 border-zinc-200 border-b ">
                <div className="w-full h-full flex-col flex gap-6 ">
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <IoBedOutline size={20} />
                    <h1>6 Bedrooms</h1>
                  </div>

                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <LiaShareAltSolid size={22} />
                    <h1>720 sq ft</h1>
                  </div>
                </div>

                <div className="w-full h-full flex-col items-center flex gap-6 ">
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <PiBathtub size={20} />
                    <h1>3 Bathrooms</h1>
                  </div>
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <GiHomeGarage size={22} />
                    <h1>2 Garages</h1>
                  </div>
                </div>
              </div>

              <div className=" w-full h-full justify-between items-center flex">
                <h1 className="text-lg font-medium text-zinc-600 hover:text-green-400">
                  $ 150,000
                </h1>

                <div className="flex gap-10 text-zinc-500">
                  <MdOutlineCompareArrows size={20} />
                  <FaRegHeart size={20} />
                  <MdOutlineShare size={20} />
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>

        {/* ..............card-2................ */}

        <div className=" w-full  border-2 boder-zinc-200 shadow-lg rounded-lg overflow-hidden bg-white justify-between h-full lg:h-[40vh] flex lg:flex-row flex-col  items-center ">
          <img
            className=" w-full lg:w-[20vw] h-full object-cover"
            src={fp1}
            alt=""
          />

          <div className=" w-full h-full p-6  flex flex-col">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium text-zinc-600 hover:text-green-400">
                  Real Luxury Family House Villa
                </h1>

                <div className="flex text-zinc-500 text-[13px] gap-2 items-center ">
                  <TiLocationOutline size={18} />
                  <h1>Est St, 77 - Central Park South, NYC</h1>
                </div>
              </div>

              <div className=" w-full h-full flex pb-6 border-zinc-200 border-b ">
                <div className="w-full h-full flex-col flex gap-6 ">
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <IoBedOutline size={20} />
                    <h1>6 Bedrooms</h1>
                  </div>

                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <LiaShareAltSolid size={22} />
                    <h1>720 sq ft</h1>
                  </div>
                </div>

                <div className="w-full h-full flex-col items-center flex gap-6 ">
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <PiBathtub size={20} />
                    <h1>3 Bathrooms</h1>
                  </div>
                  <div className="flex text-zinc-500 text-[15px] gap-2 items-center">
                    <GiHomeGarage size={22} />
                    <h1>2 Garages</h1>
                  </div>
                </div>
              </div>

              <div className=" w-full h-full justify-between items-center flex">
                <h1 className="text-lg font-medium text-zinc-600 hover:text-green-400">
                  $ 150,000
                </h1>

                <div className="flex gap-10 text-zinc-500">
                  <MdOutlineCompareArrows size={20} />
                  <FaRegHeart size={20} />
                  <MdOutlineShare size={20} />
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <button className="hover:bg-green-300 bg-slate-400 text-white font-medium px-10 py-4 flex gap-2  items-center rounded-full border-2 border-white hover:shadow-lg ">
        View More <IoIosArrowDropright size={24} className="hover:ml-4 duration-300" />
      </button>
    </div>
  );
}

export default Featured;
