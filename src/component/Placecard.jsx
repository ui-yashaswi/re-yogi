import React from 'react';

const Placecard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};



// function Placecard() {
//   return (
//     <div className=" flex w-full h-[20vh] px-10 lg:px-40 gap-10">



//       <div className=" w-full h-full bg-red-400"></div>

//       <div className=" w-full h-full flex flex-col gap-2 ">
//         <h1>{title}</h1>
//         <h1>{subtitle} </h1>
//       </div>
//     </div>
//   );
// }

export default Placecard
