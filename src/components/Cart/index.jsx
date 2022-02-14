import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
         totalUniqueItems,
         items,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart} = useCart();
         if(isEmpty) return <h2 className='text-center text-2xl'>Your cart is Empty.</h2>
  return (
    <>
        <section className='w-full bg-brand-gray'>    
        <div className="container bg-brand-white w-full md:w-10/12 md:m-auto px-2 md:px-3 py-4">
          <h5 className='text-3xl text-center'>Cart ({totalUniqueItems})  Total-Items({totalItems})</h5>
          <table className='table m-0'>
              <tbody>
                  {items.map((item,index)=>{
                 return(
                    <tr key={index}>
                    <td>
                      <img src={item.img} alt="" style={{height:'6rem'}} />
                    </td>
                    <td>{item.title}</td>
                    <td>price {item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button className='px-4 py-2 bg-brand-red text-white text-xl m-1' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                      <button className='px-4 py-2 bg-brand-red text-white text-xl m-1' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                      <button className='px-4 py-2 bg-brand-red text-white text-md m-1' onClick={()=>removeItem(item.id)}>Remove Item</button>
                    </td>
                  </tr>
                 )
                })}
              </tbody>
          </table>

          <div className="m-auto">
            <h2 className="text-4xl text-center">Total Price:  ${cartTotal}</h2>
            <button className='px-4 py-2 m-1 bg-brand-red text-white text-xl' onClick={()=>emptyCart()}>Clear Cart</button>
         <button className='px-3 py-2 m-1 bg-brand-red text-white text-xl '>Pay Now</button>
          </div>
            </div>
            </section>

    </>
  )
}

export default Cart