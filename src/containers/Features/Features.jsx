import React from "react"
import Navbar from '../../components/Navbar/Navbar'
import { FaRegCheckCircle } from "react-icons/fa";

function Features() {
  return(
    <div className='min-h-screen max-h-fit bg-rich-gradient'>
      <Navbar />
      <div className='min-h-screen max-h-fit flex flex-col items-center justify-start relative px-4 py-8 text-white md:p-8 lg:py-12'>
        <h1 className='text-3xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient md:text-4xl lg:text-6xl'>Features</h1>
        <h2 className='text-xl text-center text-transparent bg-clip-text font-medium bg-silver-gradient mb-10 mt-4 md:text-3xl lg:text-4xl 2xl:max-w-6xl'>At MVCredit, we are committed to revolutionizing your financial experience. Our mission is to empower you with cutting-edge features and unmatched benefits.</h2>
        <h2 className='text-2xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient mb-4 md:text-3xl lg:text-5xl 2xl:mb-8'>Key Features:</h2>
        <div className="flex flex-col p-2 border-y-2 shadow-xl rounded-lg border-slate-300 md:text-2xl lg:text-4xl lg:border-y-4 lg:rounded-2xl xl:rounded-3xl xl:flex-row 2xl:border-0">
          <div className="2xl:border-y-4 2xl:rounded-2xl 2xl:mx-32">
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Cashback Rewards</h3></div>
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Travel Benefits</h3></div>
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Enhanced Security</h3></div>
          </div>
          <div className="2xl:border-y-4 2xl:rounded-2xl 2xl:mx-28">
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Account Management</h3></div>
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Contactless Payments</h3></div>
            <div className="flex flex-row p-2 items-center lg:p-4"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Customizable Alerts</h3></div>
          </div>
        </div>
        <h2 className='text-2xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient mt-10 md:text-3xl lg:text-5xl'>Why Choose Us:</h2>
        <h3 className="px-6 my-4 text-xl text-center md:text-2xl lg:text-4xl 2xl:max-w-6xl">Discover why MVCredit stands out in the world of credit cards. Join us on this journey of financial excellence.</h3>
      </div>
    </div>
  );
}

export default Features;