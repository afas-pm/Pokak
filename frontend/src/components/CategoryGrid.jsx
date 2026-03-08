import React from 'react';

// Asset imports
import FreshProduceImg from '../assets/Vector-0.png';
import DairyEggsImg from '../assets/Vector-21.png';
import MeatSeafoodImg from '../assets/Vector-20.png';
import FrozenFoodsImg from '../assets/Vector-22.png';
import PantryStaplesImg from '../assets/Vector-23.png';
import SnacksSweetsImg from '../assets/Vector-11.png';
import BeveragesImg from '../assets/Vector-19.png';
import BreakfastFoodsImg from '../assets/Vector-10.png';
import SmallAppliancesImg from '../assets/Vector-15.png';
import FoodStorageImg from '../assets/Vector-14.png';
import CookwareImg from '../assets/Vector-17.png';
import CutleryImg from '../assets/Vector-16.png';
import TablewareImg from '../assets/Vector-18.png';
import KitchenToolsImg from '../assets/Vector-12.png';
import CleaningSuppliesImg from '../assets/Vector-13.png';
import SpecialtyItemsImg from '../assets/Vector-9.png';

const CATEGORIES_DATA = [
    { name: "Fresh Produce", img: FreshProduceImg },
    { name: "Dairy & Eggs", img: DairyEggsImg },
    { name: "Meat & Seafood", img: MeatSeafoodImg },
    { name: "Frozen Foods", img: FrozenFoodsImg },
    { name: "Pantry Staples", img: PantryStaplesImg },
    { name: "Snacks & Sweets", img: SnacksSweetsImg },
    { name: "Beverages", img: BeveragesImg },
    { name: "Breakfast Foods", img: BreakfastFoodsImg },
    { name: "Small Appliances", img: SmallAppliancesImg },
    { name: "Food Storage", img: FoodStorageImg },
    { name: "Cookware", img: CookwareImg },
    { name: "Cutlery", img: CutleryImg },
    { name: "Tableware", img: TablewareImg },
    { name: "Kitchen Tools", img: KitchenToolsImg },
    { name: "Cleaning Supplies", img: CleaningSuppliesImg },
    { name: "Specialty Items", img: SpecialtyItemsImg }
];

function CategoryItem({ name, img }) {
    return (
        <div className="flex flex-col items-center justify-between p-3 bg-[#27AE601A] rounded-[16px] h-[135px] w-full cursor-pointer hover:shadow-sm hover:scale-[1.02] transition-all">
            <span className="text-[14px] font-semibold text-gray-800 text-center leading-tight">
                {name}
            </span>
            <div className="w-full h-[80px] flex items-end justify-center">
                <img
                    src={img}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </div>
    );
}

export default function CategoryGrid() {
    return (
        <section className="w-full bg-[#ECF0F1] pt-10 pb-20 md:pb-80">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col gap-8 md:gap-14">

                {/* Groceries & Kitchen */}
                <div>
                    <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-900 mb-4 md:mb-6">Groceries & Kitchen</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4">
                        {CATEGORIES_DATA.map((cat, idx) => (
                            <div key={`g-${idx}`}>
                                <CategoryItem name={cat.name} img={cat.img} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Baby & Kids */}
                <div>
                    <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-900 mb-4 md:mb-6">Baby & Kids</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4">
                        {CATEGORIES_DATA.map((cat, idx) => (
                            <div key={`b-${idx}`}>
                                <CategoryItem name={cat.name} img={cat.img} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
