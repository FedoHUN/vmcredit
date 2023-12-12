import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useState } from "react";

function Faq() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return(
    <div className="min-h-screen max-h-fit bg-rich-gradient">
      <Navbar />
      <div className="flex flex-col items-center justify-start relative px-4 py-8 text-white md:p-8 lg:py-12">
        <h1 className='text-3xl text-center text-transparent bg-clip-text font-bold bg-silver-gradient md:text-4xl lg:text-6xl'>FAQ</h1>
        <h2 className="text-xl text-center m-4 md:text-2xl lg:text-4xl 2xl:max-w-6xl">Got questions? We've got answers. Check out our frequently asked questions to find the information you need.</h2>
        <div className="w-full p-2 2xl:max-w-5xl">
          <ul className="flex flex-col">
            {data.map((item, i) => (
              <li className="bg-[#031B28] my-2 shadow-lg rounded-xl">
                <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer md:text-xl md:p-5 lg:text-3xl 2xl:text-xl" onClick={() => toggle(i)}>
                  <span>{item.question}</span>
                  {selected === i ? <CiCircleMinus className="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" /> : <CiCirclePlus className="flex-shrink-0 w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10"/>}
                </h2>
                <div className={
                  selected === i ? 'border-l-2 border-[#E5B80B] max-h-36 transition-all duration-500 rounded-bl-lg' : 'border-l-2 border-[#E5B80B] max-h-0 overflow-hidden transition-all duration-500'
                  }>
                  <p className="p-3 md:text-xl lg:text-2xl">{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-xl text-center m-4 md:text-2xl lg:text-3xl">Still have questions? Contact our dedicated support team. We're here to help!</h2>
      </div>
    </div>
  );
}

const data = [
  {
    question: 'Q: What is the annual fee for each credit card tier?',
    answer: 'The annual fees for our credit cards vary based on the tier. You can find detailed information on the Pricing page.',
  },
  {
    question: 'Q: How can I apply for a credit card?',
    answer: 'To apply for a credit card, simply visit our website and navigate to the "Get Started" section. Follow the easy application process to apply online.',
  },
  {
    question: 'Q: Are there any additional fees apart from the annual fee?',
    answer: 'In addition to the annual fee, some cards may have transaction fees. Please review the terms and conditions on the Pricing page for a comprehensive overview.',
  },
  {
    question: 'Q: What benefits come with the Elite and Prestige cards?',
    answer: "The Elite and Prestige cards offer enhanced rewards, exclusive access to events, and premium travel benefits. Visit the Benefits page for a detailed breakdown of each card's features.",
  },
  {
    question: 'Q: Can I upgrade or downgrade my credit card tier?',
    answer: "Yes, you can upgrade or downgrade your credit card tier based on your changing needs. Contact our customer support team, and they will guide you through the process.",
  },
  {
    question: 'Q: How do I earn and redeem cashback rewards?',
    answer: "You earn cashback rewards with every eligible purchase. To redeem, simply log in to your account and follow the instructions in the Rewards section.",
  },
  {
    question: 'Q: What security measures are in place to protect my account?',
    answer: "We prioritize your security. Our cards come with advanced security features, including fraud protection and real-time transaction monitoring.",
  },
]

export default Faq;