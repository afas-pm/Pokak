import React from 'react';
import GroceriesIcon0 from '../assets/Vector-0.png';
import BabyKidsIcon from '../assets/Vector-5.png';
import PersonalCareIcon from '../assets/Vector-2.png';
import GroceriesIcon7 from '../assets/Vector-7.png';
import GroceriesIcon1 from '../assets/Vector-1.png';
import GroceriesIcon4 from '../assets/Vector-4.png';
import GroceriesIcon8 from '../assets/Vector-8.png';
import GroceriesIcon from '../assets/Vector.png';
import GroceriesIcon3 from '../assets/Vector-3.png';
import GroceriesIcon6 from '../assets/Vector-6.png';

export default function CategoryRibbon() {
    const categories = [
        {
            id: 1,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon0
        },
        {
            id: 2,
            title: "Baby & Kids",
            active: false,
            image: BabyKidsIcon
        },
        {
            id: 3,
            title: "Personal Care\n& Hygiene",
            active: false,
            image: PersonalCareIcon
        },
        {
            id: 4,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon7
        },
        {
            id: 5,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon1
        },
        {
            id: 6,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon4
        },
        {
            id: 7,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon8
        },
        {
            id: 8,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon
        },
        {
            id: 9,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon3
        },
        {
            id: 10,
            title: "Groceries\n& Kitchen",
            active: false,
            image: GroceriesIcon6
        }
    ];

    return (
        <div className="w-full bg-[#ECF0F1]">
            {/* Maximum width container matching navbar */}
            <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-6">
                <div className="flex items-center justify-center gap-4 overflow-x-auto no-scrollbar pt-2 pb-4 -mx-2 px-2">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`
                relative flex flex-col items-center shrink-0 cursor-pointer
                w-[124px] h-[152px] bg-white rounded-[16px] overflow-hidden shadow-sm
                transition-transform hover:-translate-y-1
                border border-[#27ae6040]
              `}
                        >
                            {/* Title Text */}
                            <div className="p-3 pb-0 z-20 text-center">
                                <h3 className="text-[15px] font-semibold text-gray-800 leading-[1.2] whitespace-pre-line">
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Image at the bottom */}
                            <div className="absolute bottom-0 left-0 w-full flex items-end justify-center z-0">
                                {cat.image && (
                                    <img src={cat.image} alt={cat.title} className="w-full h-[85px] object-cover object-top" />
                                )}
                            </div>

                            {/* Green curve overlapping above the image */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-[30px] bg-[#DEFFEC] z-10"
                                style={{ borderTopLeftRadius: '50% 24px', borderTopRightRadius: '50% 24px' }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
