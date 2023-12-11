import React from "react"
import Navbar from '../../components/Navbar/Navbar'
import { FaRegCheckCircle } from "react-icons/fa";

function Features() {
  return(
    <div className='min-h-screen max-h-fit flex flex-col items-center justify-start relative bg-rich-gradient px-2 py-4 text-white'>
      <Navbar />
      <h1 className='text-3xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient mt-10 md:text-4xl'>Features</h1>
      <h2 className='text-xl text-center text-transparent bg-clip-text font-medium bg-silver-gradient mb-10 mt-4 md:text-3xl'>At MVCredit, we are committed to revolutionizing your financial experience. Our mission is to empower you with cutting-edge features and unmatched benefits.</h2>
      <h2 className='text-2xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient mb-4 md:text-3xl'>Key Features:</h2>
      <div className="p-2 border-y-2 shadow-xl rounded-lg border-slate-300 md:text-2xl">
        <div className="flex w-full flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Cashback Rewards</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Travel Benefits</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Enhanced Security</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Online Account Management</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Contactless Payments</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="flex-shrink-0 m-2 text-[#E5B80B]" /><h3>Customizable Alerts</h3></div>
      </div>
      <h2 className='text-2xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient mt-10 md:text-3xl'>Why Choose Us:</h2>
      <h3 className="px-6 my-4 text-xl text-center md:text-2xl">Discover why MVCredit stands out in the world of credit cards. Join us on this journey of financial excellence.</h3>
    </div>
  );
}

export default Features;