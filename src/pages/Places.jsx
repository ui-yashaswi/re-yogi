import React from "react";
import bg from "../.././public/gallery/bg-h-1.jpg"

function Places() {
  return (
    <div className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 px-10 py-20  ">

      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl"> Popular Places</h1>
        <h1 className=" text-zinc-500">Properties In Most Popular Places</h1>
      </div>

      <div className="w-full  h-full flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-between">

        <div className="lg:w-96 w-full h-44 flex justify-between border-2 border-slate-100 shadow-lg rounded-lg overflow-hidden">
          <div>
            <img className=" w-48 h-full object-cover" src={bg} alt="" />
          </div>

          <div className=" flex flex-col gap-2 justify-center items-center px-10 ">
            <h1 className="text-nowrap  text-zinc-600 font-semibold ">
              NEW YORK
            </h1>
            <h1 className="font-medium text-zinc-400">203 Properties</h1>
          </div>
        </div>

        <div className="lg:w-96 w-full h-44 flex justify-between border-2 border-slate-200 shadow-lg rounded-lg overflow-hidden">
          <div>
            <img className=" w-48 h-full object-cover" src={bg} alt="" />
          </div>

          <div className=" flex flex-col gap-2 justify-center items-center px-10 ">
            <h1 className="text-nowrap  text-zinc-600 font-semibold ">
              NEW YORK
            </h1>
            <h1 className="font-medium text-zinc-400">203 Properties</h1>
          </div>
        </div>

        <div className="lg:w-96 w-full h-44 flex justify-between border-2 border-slate-200 shadow-lg rounded-lg overflow-hidden">
          <div>
            <img className=" w-48 h-full object-cover" src={bg} alt="" />
          </div>

          <div className=" flex flex-col gap-2 justify-center items-center px-10 ">
            <h1 className="text-nowrap  text-zinc-600 font-semibold ">
              NEW YORK
            </h1>
            <h1 className="font-medium text-zinc-400">203 Properties</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Places;
