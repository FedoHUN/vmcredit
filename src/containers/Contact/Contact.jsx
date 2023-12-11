import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return(
    <div className="min-h-screen flex max-h-fit flex-col items-center justify-start bg-rich-gradient px-2 py-4 text-white">
      <Navbar />
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient mt-10 md:text-4xl'>Get in Touch</h1>
      <h2 className="text-xl text-center m-4 md:text-2xl">Questions, feedback, or assistance needed? We're here for you. Reach out, and let's connect.</h2>
      <div>
        <div className="mx-4 mb-8 my-6 rounded-lg shadow-md bg-[#031B28] shadow-[#E5B80B]">
          <div className="p-4 md:p-6">
            <div className="border-b-2 mb-4 w-fit border-b-[#E5B80B] md:mb-6">
              <h3 className='text-xl w-fit text-left font-semibold md:text-3xl'>Customer Support</h3>
            </div>
            <div className="flex pb-2 flex-row justify-between md:text-xl md:pb-4">
              <span className="pr-6 font-semibold">Email: </span><span>fedohun@gmail.com</span>
            </div>
            <div className="flex flex-row justify-between md:text-xl">
              <span className="pr-6 font-semibold">Phone: </span><span>+421944357272</span>
            </div>
          </div>
        </div>
        <div className="mx-4 mb-8 my-6 rounded-lg shadow-md bg-[#031B28] shadow-[#E5B80B]">
          <div className="p-4 md:p-6">
            <div className="border-b-2 mb-4 w-fit border-b-[#E5B80B] md:mb-6">
              <h3 className='text-xl w-fit text-left font-semibold md:text-3xl'>Visit Us</h3>
            </div>
            <div className="flex pb-4 text-sm flex-row justify-between md:text-xl">
              <span className="pr-6 font-semibold">Address: </span><span>2 Hare Croft, Liverpool L28 8AD</span>
            </div>
            <div className="flex flex-row text-sm justify-between md:text-xl">
              <span className="pr-6 font-semibold">Operating Hours:</span><span>Mon - Fri: 10AM - 9PM</span>
            </div>
          </div>
        </div>
        <div className="mx-4 mb-8 my-6 rounded-lg shadow-md bg-[#031B28] shadow-[#E5B80B]">
          <div className="p-4 md:p-6">
            <div className="border-b-2 mb-4 w-fit border-b-[#E5B80B] md:mb-6">
              <h3 className='text-xl w-fit text-left font-semibold md:text-3xl'>Social Media</h3>
            </div>
            <div className="flex flex-row justify-between">
            <a href='https://www.instagram.com/fedohun/' target="_blank" rel="noopener noreferrer"><FaInstagram className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12" /></a>
            <a href='https://www.facebook.com/mate.vojtko.94/' target="_blank" rel="noopener noreferrer"><FaFacebook className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12" /></a>
            <a href='https://www.linkedin.com/in/m%C3%A1t%C3%A9-vojtko-40264925a/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12" /></a>
            <a href='https://github.com/FedoHUN' target="_blank" rel="noopener noreferrer"><FaGithub className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;