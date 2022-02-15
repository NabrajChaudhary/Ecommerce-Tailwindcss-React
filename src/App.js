import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import { CartProvider } from "react-use-cart";
import Cart from './components/Cart';
import DropDown from './components/DropDown';

function App() {
  return (
    <>

      <CartProvider>
        <Navbar />

        <Hero />
        <ProductSection />

        {/* <Cart /> */}
        <div className="py-5 my-5">
          <h2 className='text-4xl bg-brand-black text-white'>brand-black</h2>
          <h2 className="text-4xl bg-brand-red text-white">brand-red</h2>
          <h2 className="text-4xl bg-brand-gray text-black">brand-gray</h2>
        </div>

      </CartProvider>
    </>
  );
}

export default App;
