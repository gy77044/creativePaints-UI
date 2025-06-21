import React from "react";
import secondWall from "../../../public/assests/allimg/blueWall.jpeg";
import thirdWall from "../../../public/assests/allimg/green.jpeg";
import fourthWall from "../../../public/assests/allimg/greenWall.jpeg";
import fifthWall from "../../../public/assests/allimg/orangeWall.jpeg";
import redWall from "../../../public/assests/allimg/redwall.jpeg";
import firstWall from "../../../public/assests/allimg/yelloWall.jpeg";
import imgLogo from "../../../public/assests/themewithlogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// const images: string[][] = [
//   [secondWall, redWall],
//   [firstWall, imgLogo, fourthWall],
//   [thirdWall, fifthWall],
// ];

const Banner: React.FC = () => {
  const navigate = useNavigate()
  const handleNavigate =()=>{
    console.log("clicked")
    // navigate("/product")
  }
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>


    
<div className="relative overflow-hidden bg-white">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Bring Walls To Life With <br/><span className="text-orange-500">Creation Paints</span></h1>
        <p className="mt-4 text-xl text-gray-500"> High-quality, durable, and vibrant colors for every space.</p>
      </div>
      <div>
        <div className="mt-10">
          <div aria-hidden="true" className=" lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="group h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={secondWall} alt="" className="size-full object-cover" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={redWall} alt="" className="size-full object-cover" />
                  </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={firstWall} alt="" className="size-full object-cover" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={imgLogo} alt="" className="size-full object-cover" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={fourthWall} alt="" className="size-full object-cover" />
                  </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={thirdWall} alt="" className="size-full object-cover" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl sm:opacity-0 lg:opacity-100">
                    <img src={fifthWall} alt="" className="size-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/product" className="inline-block border border-transparent bg-gray-900 px-10 py-4 text-center font-medium text-white hover:scale-110 transition-all duration-500" >View Products</a>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Banner;
