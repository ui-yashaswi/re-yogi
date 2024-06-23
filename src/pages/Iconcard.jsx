import React from 'react'
import { GiSpookyHouse } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";

function Iconcard() {
  return (
    <div className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 px-10 py-20 ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl">Why Choose Us</h1>
        <h1 className=" text-zinc-500">
          We provide full service at every step.
        </h1>
      </div>

      <div className=" w-full h-full flex lg:flex-row flex-col lg:gap-0 gap-20 justify-between">
        <div className=" w-full lg:w-[25vw] text-green-300 h-80 border-2 border-slate-200  rounded-lg  shadow-lg flex flex-col gap-10 justify-center items-center p-6">
          <GiSpookyHouse size={300} />

          <div className=" w-full h-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-zinc-600 font-semibold text-xl">
              Wide Renge Of Properties
            </h1>
            <h1 className="text-zinc-500 text-center text-md">
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </h1>
          </div>
        </div>

        <div className=" w-full lg:w-[25vw] text-green-300 h-80 border-2 border-slate-200  rounded-lg  shadow-lg flex flex-col gap-10 justify-center items-center p-6">
          <GiWallet size={300} />

          <div className=" w-full h-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-zinc-600 font-semibold text-xl">
              Trusted by thousands
            </h1>
            <h1 className="text-zinc-500 text-center text-md">
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </h1>
          </div>
        </div>

        <div className=" w-full lg:w-[25vw] text-green-300 h-80 border-2 border-slate-200  rounded-lg  shadow-lg flex flex-col gap-10 justify-center items-center p-6">
          <GiTakeMyMoney size={300} />

          <div className=" w-full h-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-zinc-600 font-semibold text-xl">
              Financing made easy
            </h1>
            <h1 className="text-zinc-500 text-center text-md">
              lorem ipsum dolor sit amet, consectetur pro adipisici consectetur
              debits adipisicing lacus consectetur Business Directory.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iconcard
