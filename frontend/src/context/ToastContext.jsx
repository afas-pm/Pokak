import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`px-4 py-2 rounded-lg shadow-lg text-white text-sm font-bold transition-all ${toast.type === 'error' ? 'bg-red-500' : 'bg-[#21a559]'
                            }`}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
