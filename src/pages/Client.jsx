import React from "react";
import c1 from "/gallery/clnt-1.jpg";
import comma from "/gallery/comma.png";

function Client() {
  return (
    <div className='className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 bg-slate-100 px-10 py-20'>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl">
          Clients Testimonials
        </h1>
        <h1 className=" text-zinc-500">
          We collect reviews from our customers.
        </h1>
      </div>

      <div className="w-full h-full flex lg:flex-row flex-col lg:gap-10 gap-20  ">

        <div className="lg:w-[28vw] w-full h-full lg:h-60 p-10 flex flex-col gap-6 border shadow-lg rounded-lg">
          <h1 className="text-zinc-400 font-serif">
            Lorem ipsum dolor sit elit. Doloremque modi nobis sit, unde at
            libero molestias dicta sunt, suscipit dolorem harum!
          </h1>

          <div className="flex gap-10 justify-between">
            <div className="flex gap-4">
              <img
                className="w-20 h-20 rounded-full border-2 border-green-400"
                src={c1}
                alt=""
              />

              <div className="flex flex-col justify-center ">
                <h1 className="text-zinc-600 font-medium text-lg text-nowrap">
                  Lisa Smith
                </h1>
                <h1 className="text-zinc-500 ">New York</h1>
              </div>
            </div>

            <img className="w-10 h-20" src={comma} alt="" />
          </div>
        </div>

        <div className="lg:w-[28vw] w-full h-full lg:h-60 p-10 flex flex-col gap-6 border shadow-lg rounded-lg">
          <h1 className="text-zinc-400 font-serif">
            Lorem ipsum dolor sit elit. Doloremque modi nobis sit, unde at
            libero molestias dicta sunt, suscipit dolorem harum!
          </h1>

          <div className="flex gap-10 justify-between">
            <div className="flex gap-4">
              <img
                className="w-20 h-20 rounded-full border-2 border-green-400"
                src={c1}
                alt=""
              />

              <div className="flex flex-col justify-center ">
                <h1 className="text-zinc-600 font-medium text-lg text-nowrap">
                  Lisa Smith
                </h1>
                <h1 className="text-zinc-500 ">New York</h1>
              </div>
            </div>

            <img className="w-10 h-20" src={comma} alt="" />
          </div>
        </div>

        <div className="lg:w-[28vw] w-full h-full lg:h-60 p-10 flex flex-col gap-6 border shadow-lg rounded-lg">
          <h1 className="text-zinc-400 font-serif">
            Lorem ipsum dolor sit elit. Doloremque modi nobis sit, unde at
            libero molestias dicta sunt, suscipit dolorem harum!
          </h1>

          <div className="flex gap-10 justify-between">
            <div className="flex gap-4">
              <img
                className="w-20 h-20 rounded-full border-2 border-green-400"
                src={c1}
                alt=""
              />

              <div className="flex flex-col justify-center ">
                <h1 className="text-zinc-600 font-medium text-lg text-nowrap">
                  Lisa Smith
                </h1>
                <h1 className="text-zinc-500 ">New York</h1>
              </div>
            </div>

            <img className="w-10 h-20" src={comma} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
