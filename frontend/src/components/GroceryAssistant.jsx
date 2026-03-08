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
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Main container - #FDF2DF bg */}
                <div className="max-w-[950px] bg-[#FDF2DF] rounded-[20px] px-8 py-6 flex flex-row items-center gap-6">

                    {/* Left Text Column - left aligned */}
                    <div className="flex-shrink-0 w-[360px]">
                        <h2 className="text-[24px] font-semibold text-gray-900 leading-[1.3] mb-1.5">
                            Your personal grocery assistant
                        </h2>
                        <p className="text-gray-500 text-[18px] leading-relaxed mb-4">
                            Find recipes, get recommendations, and shop smarter with AI
                        </p>
                        <button className="bg-[#F39C12] hover:bg-[#d4880f] transition-colors text-white font-bold py-2 px-5 rounded-[8px] text-[12px]">
                            Try Now
                        </button>
                    </div>

                    {/* Right Cards Row - aligned to right */}
                    <div className="flex-1 flex gap-3 justify-end">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-[14px] p-3 w-[140px] flex flex-col shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-[#E5E5E5]"
                            >
                                <h3 className="text-[14px] font-semibold text-gray-800 leading-tight whitespace-pre-line text-left mb-1">
                                    {item.title}
                                </h3>

                                <div className="flex items-center justify-center py-2 flex-1">
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title.replace('\n', ' ')}
                                        className="w-[68px] h-[56px] object-contain drop-shadow-sm mix-blend-multiply"
                                    />
                                </div>

                                {/* Orange tinted button - #F39C1233 bg, #F39C12 text */}
                                <button
                                    className="w-full font-bold text-[11px] py-1.5 rounded-[8px] text-[#F39C12] hover:opacity-80 transition-opacity"
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
