import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegCheckCircle, FaRecycle, FaHandsHelping } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiLifeInTheBalance } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

function Benefits() {
  return(
    <div className="min-h-screen max-h-fit bg-rich-gradient">
      <Navbar />
      <div className="flex flex-col items-center justify-start px-4 py-8 text-white md:p-8 lg:py-12">
        <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient md:text-4xl lg:text-6xl'>Elevate Your Lifestyle with</h1>
        <div className="border-b-2 w-fit border-b-[#E5B80B]">
          <h1 className='text-2xl w-fit text-center text-transparent bg-clip-text font-semibold bg-silver-gradient md:text-4xl lg:text-6xl'>MVCredit</h1>
        </div>
        <h2 className="text-xl text-center mx-2 mt-8 md:text-2xl lg:text-4xl 2xl:max-w-6xl">At MVCredit, we redefine credit cards - each one unlocks a world of exclusive advantages, making every moment extraordinary.</h2>
        <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient my-8 md:text-4xl lg:text-6xl'>Signature Benefits:</h1>
        <div className="grid lg:grid-cols-2 lg:gap-x-12 mt-6 md:mx-16 md:gap-y-4 lg:mx-6 2xl:max-w-6xl">
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <BsGraphUpArrow className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Personal Growth Hub</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Access to premium online courses and educational content for continuous learning.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Exclusive partnerships with leading educational platforms.</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <MdOutlineHealthAndSafety className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Wellness & Health Perks</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Fitness app subscriptions and wellness service discounts.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Complimentary virtual health consultations.</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <GiLifeInTheBalance className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Lifestyle Concierge</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Tailored recommendations for dining, entertainment, and travel.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Personalized lifestyle coaching services.</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <FaRecycle className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Sustainable Living Rewards</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Eco-friendly initiatives with rewards.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Exclusive discounts on sustainable products.</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient mb-8 md:text-4xl lg:text-6xl'>Community Engagement:</h1>
        <div className="grid lg:grid-cols-2 lg:gap-x-12 mt-6 md:mx-16 md:gap-y-4 lg:mx-6 2xl:max-w-6xl">
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <FaHandsHelping className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Philanthropy and Charity Contributions</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Every transaction contributes to a social cause or charity.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Cardholder involvement in community-driven projects.</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-2">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                  <FaPeopleGroup className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-12 2xl:h-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-lg font-semibold text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl">Exclusive Events for Cardholders</h4>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Invitations to exclusive community events and gatherings.</p>
                <p className="flex flex-row p-2 items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-xl"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0 md:w-6 md:h-6 lg:ml-0 xl:w-8 xl:h-8 xl:mr-4 2xl:w-6 2xl:h-6" />Networking opportunities with like-minded individuals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;