import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import Title from './Title'

function OurPolicy() {
    return (
      <>
        <div className="text-center py-6 text-3xl w-full mt-6">
          <Title text1={"OUR "} text2={"POLICY"} />
        </div>
        <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-4 text-center py-12 text-xs sm:text-sm md:text-base text-gray-700">
          <div className="border border-gray-400 rounded-lg p-6 shadow-md">
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold text-xs sm:text-sm md:text-base">
              Smooth Exchange Policy
            </p>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              We offer a hassle-free exchange and return policy to ensure your satisfaction.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg p-6 shadow-md">
            <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold text-xs sm:text-sm md:text-base">
              Commitment to Quality
            </p>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              Crafting timeless elegance with unparalleled authenticity and meticulous attention to detail.
            </p>
          </div>
          <div className="border border-gray-400 rounded-lg p-6 shadow-md">
            <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold text-xs sm:text-sm md:text-base">
              Exceptional Customer Support
            </p>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              Dedicated to delivering a seamless experience, where your satisfaction is our utmost priority.
            </p>
          </div>
        </div>
      </>
    );
  }
  
  export default OurPolicy;