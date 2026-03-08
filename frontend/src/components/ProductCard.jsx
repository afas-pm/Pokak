import React, { useState } from 'react';

export default function ProductCard({ product }) {
    const {
        name = "Amul Dark Chocolate 70% Cocoa",
        weight = "200g",
        originalPrice = 60,
        salePrice = 180,
        discount = 5,
        imgUrl = "https://placehold.co/140x140/f5f5f5/555?text=Product"
    } = product || {};

    const [qty, setQty] = useState(name.toLowerCase().includes('amul dark chocolate') ? 1 : 0);

    return (
        <div className="rounded-[14px] w-full h-full bg-white flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow relative border border-[#E5E5E5]">
            {/* Top section - image area */}
            <div className="relative bg-[#F5F5F5] flex items-center justify-center h-[140px] px-3">
                {/* Discount Tag */}
                    {discount > 0 && (
                        <div className="absolute top-0 left-2 z-10">
                            <div
                                className="bg-[#27AE60] text-white text-[10px] font-bold w-[28px] h-[44px] flex flex-col items-center justify-start pt-[10px] gap-[2px]"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 18%, 100% 100%, 0% 100%, 0% 18%)'
                                }}
                            >
                                <div className="w-[5px] h-[5px] bg-white rounded-full opacity-90" />
                                <span>{discount}%</span>
                            </div>
                        </div>
                    )}

                {/* Add / Quantity Button */}
                <div className="absolute top-2 right-2 z-10">
                    {qty === 0 ? (
                        <button
                            onClick={() => setQty(1)}
                            className="w-[28px] h-[28px] bg-white border border-[#27AE60] rounded-[8px] flex items-center justify-center text-[#27AE60] text-[18px] font-medium shadow-sm hover:bg-[#EAFFF3] transition-colors"
                        >
                            +
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 bg-white border border-[#27AE60] rounded-[8px] px-1.5 py-0.5 h-[28px] shadow-sm">
                            <button
                                onClick={() => setQty(Math.max(0, qty - 1))}
                                className="w-[14px] flex items-center justify-center text-[#27AE60] text-[16px] font-bold"
                            >−</button>
                            <span className="text-[#27AE60] text-[13px] font-bold min-w-[18px] text-center">
                                {qty < 10 ? `0${qty}` : qty}
                            </span>
                            <button
                                onClick={() => setQty(qty + 1)}
                                className="w-[24px] flex items-center justify-center text-[#27AE60] text-[16px] font-bold"
                            >+</button>
                        </div>
                    )}
                </div>

                {/* Product Image */}
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-[100px] h-[100px] object-contain"
                />
            </div>

            {/* Bottom section - product info */}
            <div className="px-3 py-3 flex flex-col gap-1 flex-1">
                <h4 className="text-[14px] font-medium text-gray-800 leading-[1.3] line-clamp-2 h-[34px]">
                    {name}
                </h4>

                <div className="flex items-center justify-between mt-auto pt-1">
                    {/* Weight */}
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <span className="text-[12px] text-[#27AE60] font-medium">{weight}</span>
                        <svg className="w-2.5 h-2.5 text-[#27AE60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-end">
                        {originalPrice > 0 && originalPrice !== salePrice && (
                            <span className="text-[10px] text-gray-400 line-through leading-none">₹{originalPrice}</span>
                        )}
                        <span className="text-[14px] font-bold text-gray-900 leading-tight">₹{salePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}