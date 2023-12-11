import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegCheckCircle, FaRecycle, FaHandsHelping } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiLifeInTheBalance } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

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
      <div className="grid lg:grid-cols-2 lg:gap-x-12 mt-6">
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
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
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                <MdOutlineHealthAndSafety className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Wellness & Health Perks</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Fitness app subscriptions and wellness service discounts.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Complimentary virtual health consultations.</p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                <GiLifeInTheBalance className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Lifestyle Concierge</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Tailored recommendations for dining, entertainment, and travel.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Personalized lifestyle coaching services.</p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                <FaRecycle className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Sustainable Living Rewards</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Eco-friendly initiatives with rewards.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Exclusive discounts on sustainable products.</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient mb-8'>Community Engagement:</h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-12 mt-6">
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                <FaHandsHelping className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Philanthropy and Charity Contributions</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Every transaction contributes to a social cause or charity.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Cardholder involvement in community-driven projects.</p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="block h-full rounded-xl bg-[#031B28] shadow-md  border border-[#E5B80B] mx-4">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full shadow-md bg-slate-100 text-[#031B28] p-4 border border-[#E5B80B]">
                <FaPeopleGroup className="flex-shrink-0 w-10 h-10" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="mb-4 text-lg font-semibold text-center">Exclusive Events for Cardholders</h4>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Invitations to exclusive community events and gatherings.</p>
              <p className="flex flex-row p-2 items-center"><FaRegCheckCircle className="m-2 text-[#E5B80B] flex-shrink-0" />Networking opportunities with like-minded individuals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;