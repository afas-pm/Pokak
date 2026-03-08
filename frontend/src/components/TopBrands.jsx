import React from 'react';
import Amul from '../assets/image-29.png';
import Nestle from '../assets/image-30.png';
import MotherDairy from '../assets/image-31.png';
import Parag from '../assets/image-32.png';

const BRANDS = [
    { name: "Amul", imgUrl: Amul },
    { name: "Nestle", imgUrl: Nestle },
    { name: "Mother Dairy", imgUrl: MotherDairy },
    { name: "Parag", imgUrl: Parag },
    { name: "Mother Dairy", imgUrl: MotherDairy },
    { name: "Parag", imgUrl: Parag },
];

export default function TopBrands() {
    return (
        <section className="w-full bg-[#ECF0F1]">
            <div className="max-w-[1440px] mx-auto px-6 py-6">
                <h2 className="text-[20px] font-semibold text-gray-900 mb-4">Top Brands</h2>
                <div className="flex justify-between gap-3 pt-2 pb-1">
                    {BRANDS.map((brand, idx) => (
                        <div
                            key={idx}
                            className="flex-1 min-w-0 h-[100px] bg-white rounded-[14px] border border-[#27AE60] flex items-center justify-center px-5 py-3 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
                        >
                            <img
                                src={brand.imgUrl}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}