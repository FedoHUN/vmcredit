import Phone from '../../assets/card2.0.png'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div className='min-h-screen max-h-fit flex flex-col items-center justify-between relative bg-rich-gradient px-2 py-4'>
      <Navbar />
      <div className='flex justify-center items-center'><h1 className='text-4xl text-center text-transparent bg-clip-text font-medium bg-silver-gradient'>Welcome to MVCredit <br></br>Your Gateway to Financial Freedom!</h1></div>
      <div className='w-3/4 mt-6'><img src={Phone}></img></div>
      <div className='p-4 mx-4 mb-6 rounded-3xl shadow-xl'><h2 className='text-lg  text-center text-slate-300 tracking-wide text-opacity-80'>At MVCredit, we believe in providing you with unparalleled financial solutions tailored to your lifestyle. Explore our range of credit cards, each designed to cater to your unique needs.</h2></div>
      <div className=''><button className='font-bold border-opacity-0 text-lg border-white border-2 m-2 p-2 px-4 border-primary hover:text-white hover:bg-opacity-0 hover:bg-clip-text hover:border-opacity-100 bg-silver-gradient rounded-full shadow-lg'>Get Started Today!</button></div>
    </div>
  );
}

export default Home;