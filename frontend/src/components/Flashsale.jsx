import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Chocolate from '../assets/image-9.png';
import Milk from '../assets/image-10.png';
import Tomato from '../assets/image-11.png';
import Broccoli from '../assets/image-12.png';

const FLASH_PRODUCTS = [
  {
    name: "Broccoli",
    weight: "1Piece",
    originalPrice: 60,
    salePrice: 180,
    discount: 10,
    imgUrl: Broccoli
  },
  {
    name: "Organic Almond Milk",
    weight: "1L",
    originalPrice: 300,
    salePrice: 280,
    discount: 10,
    imgUrl: Milk
  },
  {
    name: "Hybrid Tomato",
    weight: "500g",
    originalPrice: 30,
    salePrice: 25,
    discount: 3,
    imgUrl: Tomato
  },
  {
    name: "Amul Dark Chocolate 70% Cocoa",
    weight: "200g",
    originalPrice: 60,
    salePrice: 180,
    discount: 5,
    imgUrl: Chocolate
  },
  {
    name: "Broccoli",
    weight: "1Piece",
    originalPrice: 60,
    salePrice: 180,
    discount: 10,
    imgUrl: Broccoli
  },
  {
    name: "Organic Almond Milk",
    weight: "1L",
    originalPrice: 300,
    salePrice: 280,
    discount: 10,
    imgUrl: Milk
  },
  {
    name: "Hybrid Tomato",
    weight: "500g",
    originalPrice: 30,
    salePrice: 25,
    discount: 3,
    imgUrl: Tomato
  },
  {
    name: "Amul Dark Chocolate 70% Cocoa",
    weight: "200g",
    originalPrice: 60,
    salePrice: 180,
    discount: 5,
    imgUrl: Chocolate
  }
];

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="w-full bg-[#ECF0F1]">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Soft green container */}
        <div className="w-full bg-[#EAFFF3] rounded-[24px] p-6 relative">
          {/* Header - Flash Sale left, Timer right */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[25px] font-semibold text-[#F39C12] tracking-tight">Flash Sale</h2>

            {/* Timer Style - Red text on cream pills */}
            <div className="flex items-center gap-1.5">
              <div className="bg-[#FFF8EE] px-2 py-1 rounded-[6px]">
                <span className="text-[#E74C3C] font-bold text-[13px]">{pad(timeLeft.hours)}h</span>
              </div>
              <div className="bg-[#FFF8EE] px-2 py-1 rounded-[6px]">
                <span className="text-[#E74C3C] font-bold text-[13px]">{pad(timeLeft.minutes)}m</span>
              </div>
              <div className="bg-[#FFF8EE] px-2 py-1 rounded-[6px]">
                <span className="text-[#E74C3C] font-bold text-[13px]">{pad(timeLeft.seconds)}s</span>
              </div>
            </div>
          </div>

          {/* Products row - justified grid */}
          <div className="relative group">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 pt-1">
              {FLASH_PRODUCTS.map((product, idx) => (
                <div key={idx} className="w-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll button - Black circle, white chevron */}
          <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-20">
            <button className="w-[36px] h-[36px] rounded-full bg-[#1E1E1E] shadow-lg flex items-center justify-center text-white hover:bg-black transition-all transform hover:scale-105 active:scale-95">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}