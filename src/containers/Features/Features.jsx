import React from "react"
import Navbar from '../../components/Navbar/Navbar'
import { FaRegCheckCircle } from "react-icons/fa";

function Features() {
  return(
    <div className='min-h-screen max-h-fit flex flex-col items-center justify-start relative bg-rich-gradient px-2 py-4 text-white'>
      <Navbar />
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-medium bg-silver-gradient my-10'>At MVCredit, we are committed to revolutionizing your financial experience. Our mission is to empower you with cutting-edge features and unmatched benefits.</h1>
      <div className="p-2 border-y-2 shadow-xl rounded-lg border-slate-300">
        <div className="flex w-full flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-blue-800" /><h3>Cashback Rewards</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-blue-800" /><h3>Travel Benefits</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-blue-800" /><h3>Enhanced Security</h3></div>
        <div className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-blue-800" /><h3>Online Account Management</h3></div>
      </div>
      <h2 className="p-10 text-xl text-center">Discover why MVCredit stands out in the world of credit cards. Join us on this journey of financial excellence.</h2>
    </div>
  );
}

export default Features;