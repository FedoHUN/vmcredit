import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import { FaRegCheckCircle } from "react-icons/fa";

function Pricing() {
  return(
    <div className="min-h-screen max-h-fit bg-rich-gradient">
      <Navbar />
      <div className="flex flex-col items-center justify-start relative px-4 py-8 text-white md:p-8 lg:py-12">
        <h1 className='text-2xl text-center text-transparent bg-clip-text font-semibold bg-silver-gradient md:text-4xl lg:text-6xl'>Credit Card Options:</h1>
        <h2 className="text-xl text-center m-4 md:text-2xl lg:text-4xl 2xl:max-w-6xl">Explore our range of credit cards, each designed to fit your budget and lifestyle. Choose the perfect one for you!</h2>
        <div className="grid xl:grid-cols-2">
          <div className="max-w-md p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-green-400 m-4 lg:max-w-2xl lg:m-12 xl:flex xl:flex-col 2xl:max-w-xl">
            <h3 className="mb-4 text-xl font-medium text-green-400 md:text-2xl lg:text-4xl 2xl:text-2xl">The Starter Card</h3>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold md:text-4xl lg:text-6xl 2xl:text-4xl">€</span>
              <span className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-8xlt 2xl:text-6xl">49</span>
              <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400 md:text-2xl lg:text-4xl0 2xl:text-2xl'>/year</span>
            </div>
            <ul role="list" className="space-y-5 my-7 h-auto">
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-green-400 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">1% Cashback on all purchases</span>
              </li>
              <li className="flex items-center">
              <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-green-400 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Introductory APR of 0% for the first 6 months</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center md:text-lg lg:text-2xl lg:font-semibold xl:mt-auto 2xl:text-lg">Choose Plan</button>
          </div>
          <div className="max-w-md p-4 rounded-lg shadow sm:p-8 border bg-[#031B28] border-blue-500 m-4 lg:max-w-2xl lg:m-12 xl:flex xl:flex-col 2xl:max-w-xl">
            <h3 className="mb-4 text-xl font-medium text-blue-500 md:text-2xl lg:text-4xl 2xl:text-2xl">The Premium Card</h3>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold md:text-4xl lg:text-6xl 2xl:text-4xl">€</span>
              <span className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-8xl 2xl:text-6xl">99</span>
              <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400 2xl:text-2xl lg:text-4xl md:text-2xl'>/year</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">All benefits from lower tiers</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">2% Cashback on dining and travel</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Travel insurance and concierge service</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Access to exclusive events</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center md:text-lg lg:text-2xl lg:font-semibold xl:mt-auto 2xl:text-lg">Choose Plan</button>
          </div>
          <div className="max-w-md p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-violet-500 m-4 lg:max-w-2xl lg:m-12 xl:flex xl:flex-col 2xl:max-w-xl">
            <h3 className="mb-4 text-xl font-medium text-violet-500 md:text-2xl lg:text-4xl 2xl:text-2xl">The Elite Card</h3>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold md:text-4xl lg:text-6xl 2xl:text-4xl">€</span>
              <span className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-8xl 2xl:text-6xl">199</span>
              <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400 md:text-2xl lg:text-4xl 2xl:text-2xl'>/year</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">All benefits from lower tiers</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">3% Cashback on groceries, gas, and entertainment</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Airport lounge access</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-violet-500 md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Enhanced security features and fraud protection</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-violet-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center md:text-lg lg:text-2xl lg:font-semibold xl:mt-auto 2xl:text-lg">Choose Plan</button>
          </div>
          <div className="max-w-md p-4 border rounded-lg shadow sm:p-8 bg-[#031B28] border-[#E5B80B] m-4 lg:max-w-2xl lg:m-12 xl:flex xl:flex-col 2xl:max-w-xl">
            <h3 className="mb-4 text-xl font-medium text-[#E5B80B] md:text-2xl lg:text-4xl 2xl:text-2xl">The Prestige Card</h3>
            <div className="flex items-baseline text-white">
              <span className="text-3xl font-semibold md:text-4xl lg:text-6xl 2xl:text-4xl">€</span>
              <span className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-8xl 2xl:text-6xl">449</span>
              <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400 md:text-2xl lg:text-4xl 2xl:text-2xl'>/year</span>
            </div>
            <ul role="list" className='space-y-5 my-7'>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B] md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">All benefits from lower tiers</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B] md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">4% Cashback on luxury purchases</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B] md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">Premium travel benefits, including priority boarding and free checked bags</span>
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="flex-shrink-0 w-4 h-4 text-[#E5B80B] md:w-6 md:h-6 lg:w-8 lg:h-8 2xl:w-6 2xl:h-6" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3 md:text-xl lg:text-3xl 2xl:text-xl">VIP access to events and personalized concierge services</span>
              </li>
            </ul>
            <button type="button" className="text-white bg-[#E5B80B] hover:bg-[#DA9100] focus:ring-4 focus:outline-none dark:focus:ring-[#996515] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center md:text-lg lg:text-2xl lg:font-semibold xl:mt-auto 2xl:text-lg">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Pricing;