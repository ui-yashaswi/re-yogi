import React from "react";
import { IoHome } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbHomeCheck } from "react-icons/tb";
import pfImg from "../../public/gallery/pf-nav.jpg"


function Navbar() {
  return (
    <div className=" h-28 w-full lg:px-32 px-10 flex justify-between bg-green-300 items-center fixed top-0 left-0 z-50 ">
      <div className="flex lg:gap-10 items-center text-white font-semibold ">
        <IoHome size={62} />

        <Dropdown label="Menu" inline={true}>
          <Dropdown.Item>
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Listing" inline={true}>
          <Dropdown.Item>
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Menu" inline={true}>
          <Dropdown.Item>
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Menu" inline={true}>
          <Dropdown.Item>
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>

      <div className="lg:flex hidden items-center lg:gap-6 text-white font-semibold ">
        <div className=" flex gap-2 items-center">
          <FaEarthAfrica size={20} />

          <Dropdown label="ENG" inline={true}>
            <Dropdown.Item>
              <a href="/home" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/services" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <div className="w-[1px] bg-white h-8 "></div>

        <button>Sign In</button>

        <div className="w-[1px] bg-white h-8 "></div>

        <img
          className="w-16 h-16 rounded-full border-4 border-slate-400"
          src={pfImg}
          alt=""
        />

        <Dropdown label="Hi, Yogi!" inline={true}>
          <Dropdown.Item>
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </Dropdown.Item>
        </Dropdown>

        <button className="border-2 border-white rounded-lg flex gap-2 items-center bg-slate-300 p-2 ">
          Add Listing
          <TbHomeCheck size={22} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
