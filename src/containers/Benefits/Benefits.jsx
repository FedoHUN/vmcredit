import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

function Benefits() {
  return(
    <div className="min-h-screen flex max-h-fit flex-col items-center justify-start bg-rich-gradient px-2 py-4 text-white">
      <Navbar />
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient mt-10'>Elevate Your Lifestyle with</h1>
      <div className="border-b-2 w-fit border-b-[#E5B80B]">
        <h1 className='text-2xl w-fit text-center text-transparent bg-clip-text font-semibold bg-silver-gradient'>MVCredit</h1>
      </div>
      <h2 className="text-xl text-center mx-4 mt-8">At MVCredit, we redefine credit cards - each one unlocks a world of exclusive advantages, making every moment extraordinary.</h2>
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient my-8'>Signature Benefits:</h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-12 my-6">
        <div className="mb-12">
          <div className="block h-full rounded-lg bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-slate-600 p-4 border border-[#E5B80B]">
                <BsGraphUpArrow className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Personal Growth Hub</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Access to premium online courses and educational content for continuous learning.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Exclusive partnerships with leading educational platforms.</p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Benefits;