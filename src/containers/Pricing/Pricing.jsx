import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import { FaRegCheckCircle } from "react-icons/fa";

function Pricing() {
  return(
    <div className="min-h-screen max-h-fit flex-col items-center justify-start relative bg-rich-gradient px-2 py-4 text-white">
      <Navbar />
      <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient mt-10'>Credit Card Options:</h1>
      <h2 className="text-xl text-center m-4">Explore our range of credit cards, each designed to fit your budget and lifestyle. Choose the perfect one for you!</h2>
      <div className="max-w-sm p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-green-400 m-4">
        <h3 className="mb-4 text-xl font-medium text-green-400">The Starter Card</h3>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/year</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-green-400" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">1% Cashback on all purchases</span>
          </li>
          <li className="flex items-center">
          <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-green-400" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Introductory APR of 0% for the first 6 months</span>
          </li>
        </ul>
        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Plan</button>
      </div>
      <div className=" max-w-sm p-4 rounded-lg shadow sm:p-8 border bg-[#031B28] border-blue-500 m-4">
        <h3 className="mb-4 text-xl font-medium text-blue-500">The Premium Card</h3>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">99</span>
          <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/year</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">All benefits from lower tiers</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2% Cashback on dining and travel</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Travel insurance and concierge service</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Access to exclusive events</span>
          </li>
        </ul>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Plan</button>
      </div>
      <div className=" max-w-sm p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-violet-500 m-4">
        <h3 className="mb-4 text-xl font-medium text-violet-500">The Elite Card</h3>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">199</span>
          <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/year</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">All benefits from lower tiers</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">3% Cashback on groceries, gas, and entertainment</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Airport lounge access</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Enhanced security features and fraud protection</span>
          </li>
        </ul>
        <button type="button" className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-violet-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Plan</button>
      </div>
      <div className=" max-w-sm p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-[#E5B80B] m-4">
        <h3 className="mb-4 text-xl font-medium text-[#E5B80B]">The Prestige Card</h3>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">€</span>
          <span className="text-5xl font-extrabold tracking-tight">449</span>
          <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/year</span>
        </div>
        <ul role="list" className='space-y-5 my-7'>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B]" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">All benefits from lower tiers</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B]" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">4% Cashback on luxury purchases</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B]" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Premium travel benefits, including priority boarding and free checked bags</span>
          </li>
          <li className="flex items-center">
            <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B]" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">VIP access to events and personalized concierge services</span>
          </li>
        </ul>
        <button type="button" className="text-white bg-[#E5B80B] hover:bg-[#DA9100] focus:ring-4 focus:outline-none dark:focus:ring-[#996515] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Plan</button>
      </div>
    </div>
  );  
}

export default Pricing;