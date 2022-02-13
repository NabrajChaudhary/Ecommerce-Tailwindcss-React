import React from 'react'

const ItemCard = (props) => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
  <img className="w-full" src={props.Img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className=" text-brand-black font-medium text-xl mb-2">{props.ItemTitle}</div>
    <p className="text-brand-black text-sm">
    {props.ItemDesc}
    </p>
    <div className="font-bold text-brand-black text-md mb-1"><span className="text-xl">${props.ItemPrice}</span></div>
    <button className='bg-brand-red text-md text-white shadow-lg px-3 py-2 mt-4'>Add to Cart</button>
  </div>
  

</div>
    </>
  )
}

export default ItemCard