import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <ProductSection />
      <div className="py-5 my-5">
        <h2 className='text-4xl bg-brand-black text-white'>brand-black</h2>
        <h2 className="text-4xl bg-brand-red text-white">brand-red</h2>
        <h2 className="text-4xl bg-brand-gray text-black">brand-gray</h2>
      </div>
    </>
  );
}

export default App;
