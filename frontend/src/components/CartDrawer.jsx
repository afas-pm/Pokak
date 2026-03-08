import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[1000] overflow-hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 no-scrollbar">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 font-medium">Your cart is empty</p>
                                <button
                                    onClick={onClose}
                                    className="mt-4 text-[#21a559] font-bold hover:underline"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4">
                                    <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2 shrink-0">
                                        <img src={item.imgUrl} alt={item.name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{item.weight}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-2 bg-[#f0f3f5] rounded-full px-2 py-0.5">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="w-6 h-6 flex items-center justify-center font-bold text-gray-600"
                                                >
                                                    −
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-6 h-6 flex items-center justify-center font-bold text-gray-600"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="text-sm font-bold text-gray-900">₹{item.salePrice * item.quantity}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t border-gray-100 px-6 py-6 space-y-4">
                            <div className="flex items-center justify-between text-base font-bold text-gray-900">
                                <span>Total amount</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <p className="text-xs text-gray-400">Taxes and shipping calculated at checkout</p>
                            <button className="w-full bg-[#21a559] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-100 hover:bg-[#1b8535] transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
