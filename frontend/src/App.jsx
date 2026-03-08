import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// Context Providers
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'

// Layout Components
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

// Pages
import Home from './components/Home'

function NotFound() {
  return (
    <div className="text-center py-24">
      <p className="font-display font-extrabold text-8xl text-brand">404</p>
      <p className="text-muted mt-3 font-bold">Page not found</p>
    </div>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>

          {/* Top navigation + category bar */}
          <Navbar onCartOpen={() => setCartOpen(true)} />

          {/* Page content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Cart slide-in drawer */}
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  )
}