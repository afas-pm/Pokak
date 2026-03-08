import React from 'react';
import Pan from '../assets/image-6.png';
import Groceries from '../assets/image-7.png';
import Salad from '../assets/image-8.png';


export default function GroceryAssistant() {
    const features = [
        {
            id: 1,
            title: "Recipe\nSuggestions",
            buttonText: "Browse",
            imgUrl: Pan
        },
        {
            id: 2,
            title: "Personalized\npicks",
            buttonText: "View",
            imgUrl: Groceries
        },
        {
            id: 3,
            title: "Meal\nPlanning",
            buttonText: "Try Search",
            imgUrl: Salad
        }
    ];

    return (
        <section className="w-full bg-[#ECF0F1]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Main container - stack on mobile */}
                <div className="w-full lg:max-w-[950px] bg-[#FDF2DF] rounded-[24px] px-6 py-6 md:px-8 md:py-8 flex flex-col lg:flex-row items-center gap-8">

                    {/* Left Text Column */}
                    <div className="w-full lg:w-[360px] text-center lg:text-left">
                        <h2 className="text-[22px] md:text-[24px] font-semibold text-gray-900 leading-[1.3] mb-2 md:mb-1.5">
                            Your personal grocery assistant
                        </h2>
                        <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed mb-6">
                            Find recipes, get recommendations, and shop smarter with AI
                        </p>
                        <button className="bg-[#F39C12] hover:bg-[#d4880f] transition-colors text-white font-bold py-2.5 px-6 rounded-[10px] text-[13px]">
                            Try Now
                        </button>
                    </div>

                    {/* Right Cards Row - scrollable on mobile */}
                    <div className="w-full flex-1 flex gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:justify-end no-scrollbar snap-x">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[16px] p-4 min-w-[150px] w-[150px] md:w-[160px] flex flex-col shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-[#E5E5E5] snap-start"
                            >
                                <h3 className="text-[14px] md:text-[15px] font-semibold text-gray-800 leading-tight whitespace-pre-line text-left mb-2">
                                    {item.title}
                                </h3>

                                <div className="flex items-center justify-center py-3 flex-1">
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title.replace('\n', ' ')}
                                        className="w-[70px] h-[60px] object-contain drop-shadow-sm mix-blend-multiply"
                                    />
                                </div>

                                <button
                                    className="w-full font-bold text-[12px] py-2 rounded-[8px] text-[#F39C12] hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: '#F39C1233' }}
                                >
                                    {item.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
