import React from 'react'
import prt1 from '../../public/gallery/prt-1.jpg'
import prt2 from '../../public/gallery/prt-2.jpg'
import prt3 from '../../public/gallery/prt-3.jpg'
import prt4 from '../../public/gallery/prt-4.jpg'
import prt5 from '../../public/gallery/prt-5.jpg'

function Partners() {
  return (
    <div className=" w-full  h-full flex flex-col  gap-10 items-center lg:px-32 px-10 py-20 ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="font-semibold text-zinc-700 text-4xl">Our Partners</h1>
        <h1 className=" text-zinc-500">The Companies That Represent Us.</h1>
      </div>

      <div className="w-full h-full flex lg:flex-row flex-col lg:px-0 px-14 justify-between gap-3 lg:gap-10">

        <img src={prt1} alt="" />
        <img src={prt2} alt="" />
        <img src={prt3} alt="" />
        <img src={prt4} alt="" />
        <img src={prt5} alt="" />
      </div>
    </div>
  );
}

export default Partners
