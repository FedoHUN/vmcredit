import Navbar from '../../components/Navbar/Navbar'
import Iphone from '../../assets/iphone.png'

function Home() {
  return (
    <div className='flex flex-col items-center bg-rich-gradient min-h-screen max-h-fit'>
      <Navbar />
      <div className='flex flex-col items-center justify-between relative px-4 py-8 md:p-8 lg:py-12 h-full flex-1 2xl:w-full'>
        <div className='flex justify-center items-center'>
          <h1 className='text-4xl text-center text-transparent bg-clip-text font-medium bg-silver-gradient lg:text-6xl 2xl:text-5xl'>Welcome to MVCredit <br></br>Your Gateway to Financial Freedom!</h1>
        </div>
        <div className='flex flex-col items-center 2xl:flex-row h-full 2xl:mt-0 2xl:mx-4 2xl:justify-center 2xl:items-start 2xl:w-full'>
          <div className='w-3/4 mt-6 md:w-auto lg:mt-0 xl:w-2/5 2xl:w-2/6 2xl:mx-12'><img src={Iphone} className='2xl:w-[550px]' alt='CardPhoto'></img></div>
          <div className='flex flex-col items-center 2xl:items-start 2xl:mt-48 2xl:border-y-2 border-[#E5B80B] rounded-2xl 2xl:py-4'>
            <div className='p-4 pt-0 mx-4 mb-6 rounded-3xl shadow-xl md:mb-0  lg:mb-6 2xl:m-0 2xl:max-w-xl 2xl:my-auto 2xl:pt-0'><h2 className='text-lg  text-center text-slate-300 tracking-wide text-opacity-80 md:text-2xl lg:text-4xl 2xl:text-left 2xl:text-2xl'>At MVCredit, we believe in providing you with unparalleled financial solutions tailored to your lifestyle. Explore our range of credit cards, each designed to cater to your unique needs.</h2></div>
            <div className=''><button className='font-bold border-opacity-0 text-lg border-white border-2 m-2 md:mb-8 p-2 px-4 border-primary hover:text-white hover:bg-opacity-0 hover:bg-clip-text hover:border-opacity-100 bg-silver-gradient rounded-full shadow-lg lg:text-4xl lg:p-4 lg:px-6 lg:mb-2 2xl:text-xl 2xl:p-2 2xl:px-4'>Get Started Today!</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;