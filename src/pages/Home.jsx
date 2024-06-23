import React from "react";
import Typewriter from "../component/Typewriter";
import { FaEarthAfrica } from "react-icons/fa6";
import { Dropdown } from "flowbite-react";

function Home() {
  return (
    <div
      className="bg-[url('/gallery/bg-h-1.jpg')] bg-cover bg-center h-screen flex items-center justify-center"
      style={{ zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-zinc-700 opacity-30"> </div>

      <div className="relative lg:w-[70vw]  mt-40 flex  flex-col gap-4 lg:gap-10  items-center justify-center text-white">
        <Typewriter />

        <h1 className="text-xl font-semibold lg:mb-0 mb-10">
          We Have Over Million Properties For You.
        </h1>

        <div className=" flex gap-8 ">
          <button className=" rounded-lg flex  items-center bg-slate-300 px-4 py-3 ">
            Add Listing
          </button>

          <button className=" rounded-lg flex  items-center bg-green-300 px-4 py-3  ">
            Add Listing
          </button>
        </div>

        <div className="lg:w-full  lg:h-48  h-[62vh] w-70 flex  items-center  justify-center bg-white/50 relative rounded-lg">
          <div className="lg:w-[68vw] lg:h-40 h-[40vh] w-[80vw] absolute lg:left-4 lg:top-4 top-10 gap-2 bg-white flex lg:flex-row flex-col lg:gap-6 lg:py-0 py-10 px-6 justify-between  items-center rounded-lg ">
            <input
              placeholder="Enter Key Word"
              type="text"
              className="px-4 border-zinc-200  text-zinc-800 py-4 rounded-lg lg:w-56 w-60"
            />

            <div className="text-zinc-500 border-zinc-200 border py-4 px-8 lg:w-56 w-60 rounded-lg">
              <Dropdown label="Property Type" inline={true}>
                <Dropdown.Item>
                  <a href="/home" className="text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    About
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/services"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Services
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <div className="text-zinc-500 border-zinc-200 border py-4 px-8 lg:w-56 w-60 rounded-lg">
              <Dropdown label="Location" inline={true}>
                <Dropdown.Item>
                  <a href="/home" className="text-gray-700 hover:text-gray-900">
                    Home
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    About
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/services"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Services
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <button className="bg-slate-300 text-white font-semibold rounded-lg lg:w-56 w-60 px-8 py-4">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
