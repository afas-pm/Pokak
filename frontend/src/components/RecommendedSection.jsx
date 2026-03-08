import React from 'react';
import ProductCard from './ProductCard';
import Chocolate from '../assets/image-9.png';
import Milk from '../assets/image-10.png';
import Tomato from '../assets/image-11.png';
import Broccoli from '../assets/image-12.png';

const SAMPLE_PRODUCTS = [
    {
        name: "Amul Dark Chocolate 70% Cocoa",
        weight: "200g",
        originalPrice: 60,
        salePrice: 180,
        discount: 5,
        imgUrl: Chocolate
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
        name: "Broccoli",
        weight: "1Piece",
        originalPrice: 60,
        salePrice: 50,
        discount: 10,
        imgUrl: Broccoli
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
        name: "Broccoli",
        weight: "1Piece",
        originalPrice: 60,
        salePrice: 50,
        discount: 10,
        imgUrl: Broccoli
    }
];

export default function RecommendedSection() {
    return (
        <section className="w-full bg-[#ECF0F1]">
            <div className="max-w-[1440px] mx-auto px-6 py-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[25px] font-semibold text-[#1E1E1E]">Recommended for you</h2>
                    <button className="flex items-center gap-2 text-[#27AE60] font-semibold text-[15px] hover:underline group">
                        See all
                        <span className="w-[30px] h-[30px] rounded-full bg-[#27AE60] text-white flex items-center justify-center group-hover:bg-[#1e8c4a] transition-all transform group-active:scale-95">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Products row - scrollable on mobile */}
                <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar">
                    {SAMPLE_PRODUCTS.map((product, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[180px] sm:flex-1 sm:min-w-0 snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}