import React from 'react';
import Veg from '../assets/image-1.png';
import Fruits from '../assets/image-2.png';
import Snacks from '../assets/image-3.png';
import Bakery from '../assets/image-4.png';
import Choco from '../assets/image-5.png';


export default function FeatureCards() {
    const cards = [
        {
            id: 1,
            title: "Essential Focus",
            subtitle: "Fresh Vegetables",
            bgClass: "bg-[#DEFFEC]",
            titleClass: "text-[#27AE60]",
            subtitleClass: "text-[#8F8F8F]",
            btnClass: "bg-[#27AE60] text-[#FFFFFF]",
            imgUrl: Veg
        },
        {
            id: 2,
            title: "Daily Saver",
            subtitle: "Grocery Discounts",
            bgClass: "bg-[#FCE4BE]",
            titleClass: "text-[#F39C12]",
            subtitleClass: "text-[#8F8F8F]",
            btnClass: "bg-[#FFFFFF] text-[#1E1E1E] shadow-sm",
            imgUrl: Fruits
        },
        {
            id: 3,
            title: "Must-Have",
            subtitle: "Snacks & Beverages",
            bgClass: "bg-[#FADDDA]",
            titleClass: "text-[#E74C3C]",
            subtitleClass: "text-[#8F8F8F]",
            btnClass: "bg-[#E74C3C] text-[#FFFFFF]",
            imgUrl: Snacks
        },
        {
            id: 4,
            title: "Best Value",
            subtitle: "Dairy & Bakery",
            bgClass: "bg-[#FCF3D0]",
            titleClass: "text-[#F1C40F]",
            subtitleClass: "text-[#8F8F8F]",
            btnClass: "bg-[#FFFFFF] text-[#4D0000] shadow-sm",
            imgUrl: Bakery
        },
        {
            id: 5,
            title: "Trending Now",
            subtitle: "Chocolates",
            bgClass: "bg-[#DDCECE]",
            titleClass: "text-[#4D0000]",
            subtitleClass: "text-[#8F8F8F]",
            btnClass: "bg-[#4D0000] text-[#FFFFFF]",
            imgUrl: Choco
        }
    ];

    return (
        <section className="w-full bg-[#ECF0F1]">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`flex-1 min-w-[240px] min-h-[130px] rounded-[16px] p-4 flex flex-row items-center justify-between relative overflow-hidden transition-transform hover:-translate-y-1 ${card.bgClass}`}
                        >
                            <div className="flex flex-col z-10 w-[55%] h-full justify-center">
                                <h3 className={`font-semibold text-[15px] leading-tight ${card.titleClass}`}>
                                    {card.title}
                                </h3>
                                <p className={`text-[11px] mt-1 mb-3 font-medium tracking-wide ${card.subtitleClass}`}>
                                    {card.subtitle}
                                </p>
                                <div>
                                    <button className={`text-[11px] font-bold px-4 py-1.5 rounded-md transition-opacity hover:opacity-90 ${card.btnClass}`}>
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            <div className="w-[45%] h-full flex items-center justify-end relative z-0">
                                <img
                                    src={card.imgUrl}
                                    alt={card.title}
                                    className="w-full h-auto object-contain max-h-[90px] drop-shadow-sm mix-blend-multiply"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
