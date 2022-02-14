import React from 'react'
   import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  import { useCart } from 'react-use-cart';





const ItemCard = (props) => {
  const {addItem} = useCart();

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
   
      
  <img className="w-full" src={props.Img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className=" text-brand-black font-medium text-md md:text-xl mb-2">{props.ItemTitle}</div>
    <p className=" hidden md:block text-brand-black text-sm">
    {props.ItemDesc}
    </p>
    <div className="font-bold text-brand-black text-md mb-1"><span className="text-xl">${props.ItemPrice}</span></div>
    <button onClick={()=>addItem(props.item)}  className='text-xs md:text-md bg-brand-red text-md text-white shadow-lg px-3 py-2 mt-4'>Add to Cart</button>
  </div>
  

</div>
    </>
  )
}

export default ItemCard