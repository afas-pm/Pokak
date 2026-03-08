import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { FiSearch } from 'react-icons/fi'
import { CiDiscount1 } from 'react-icons/ci'
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { MdAccountCircle } from 'react-icons/md'
import { VscChatSparkle } from "react-icons/vsc"
import logo from '../assets/Pokak Logo.png'

export default function Navbar({ onCartOpen }) {
  const { totalQty } = useCart()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="bg-white sticky top-0 z-[900] border-b border-gray-100">
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 pt-[28px] pb-[16px] flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link to="/" className="shrink-0 flex items-center">
          <img src={logo} alt="POKAK" className="h-10 w-auto object-contain" />
        </Link>

        {/* ── RIGHT SIDE ── */}
        <div className="flex items-center">

          {/* Location */}
          <button className="flex items-center gap-2 text-gray-800 font-semibold text-[15px] hover:text-[#21a559] transition-colors whitespace-nowrap mr-8">
            <HiOutlineMapPin size={22} strokeWidth={1} />
            Location
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-[#f3f4f6] rounded-full px-4 py-[10px] gap-3 w-[450px] relative">
            <FiSearch size={18} strokeWidth={2.5} className="text-gray-400 shrink-0" />
            <div className="relative flex-1 h-[20px] flex items-center">
              {!query && (
                <div className="absolute inset-0 flex items-center pointer-events-none text-[14px]">
                  <span className="text-gray-500">Search for </span>
                  <span className="text-[#21a559] ml-1.5">"Ice Cream"</span>
                </div>
              )}
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none text-[14px] text-gray-800 relative z-10"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
              />
            </div>
          </div>

          {/* ── 4 Icons ── */}
          <div className="flex items-center gap-7 ml-10">

            {/* AI */}
            <button className="flex flex-col items-center gap-[5px] min-w-[36px] hover:opacity-80 transition-opacity cursor-pointer">
              <VscChatSparkle size={25} color="#27AE60" />
              <span className="text-[12px] font-medium text-gray-700 leading-none">AI</span>
            </button>

            {/* Offers */}
            <Link to="/offers" className="flex flex-col items-center gap-[5px] min-w-[36px] hover:opacity-80 transition-opacity cursor-pointer">
              <CiDiscount1 size={28} color="#4B5563" />
              <span className="text-[12px] font-medium text-gray-700 leading-none">Offers</span>
            </Link>

            {/* Cart */}
            <button onClick={onCartOpen} className="flex flex-col items-center gap-[5px] min-w-[36px] hover:opacity-80 transition-opacity cursor-pointer">
              <div className="relative pt-[2px]">
                <PiShoppingCartSimpleLight size={22} color="#4B5563" strokeWidth={1.8} />
                {/* Always-visible red badge */}
                <span className="absolute -top-2 -right-2.5 bg-[#ef4444] text-white text-[10px] font-bold min-w-[17px] h-[17px] flex items-center justify-center rounded-full border-[1.5px] border-white leading-none px-1 shadow-sm">
                  {totalQty > 0 ? totalQty : 1}
                </span>
              </div>
              <span className="text-[12px] font-medium text-gray-700 leading-none">Cart</span>
            </button>

            {/* Profile */}
            <Link to="/profile" className="flex flex-col items-center gap-[5px] min-w-[36px] hover:opacity-80 transition-opacity">
              <MdAccountCircle size={28} color="#9CA3AF" />
              <span className="text-[12px] font-medium text-gray-700 leading-none">Profile</span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}