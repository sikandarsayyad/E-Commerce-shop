import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//product provider
import ProductProvider from './context/ProductContext.jsx';
//sidebar provider
import SidebarProvider from './context/SidebarContext.jsx';
import CartProvider from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>
)
