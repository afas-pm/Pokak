import React from 'react';
import banner from '../assets/Utensils.png';

export default function Herobanner() {
  return (
    <section className="w-full bg-[#ECF0F1]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div
          className="w-full rounded-[16px] overflow-hidden relative flex items-center min-h-[220px]"
          style={{ background: 'linear-gradient(90deg, #6b4bcd 0%, #aa84cd 50%, #f4d4e4 100%)'}}
        >
          {/* Text Content */}
          <div className="pl-12 flex flex-col justify-center z-10 py-6">
            <h2 className="font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] tracking-tight">
              Best Home Deals<br />
              40<span className="text-[24px] md:text-[32px] ml-1">% OFF</span>
            </h2>
          </div>

          {/* Abstract / Placeholder for Kitchen Utensils */}
          <div className="absolute right-0 top-0 h-full w-[75%] flex justify-end items-center pr-10 pointer-events-none opacity-80">
            {/* Using a placeholder image for the utensils since the user hasn't downloaded assets */}
            <img
              src={banner}
              alt="Kitchen Utensils"
              className="h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}