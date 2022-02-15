import React from 'react'
import { createPopper } from "@popperjs/core";
import { useCart } from 'react-use-cart'

const DropDown = ({color}) => {
const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

    const {
        isEmpty,
         totalUniqueItems,
         items,
         totalItems,
         cartTotal,
         updateItemQuantity,
         removeItem,
         emptyCart} = useCart();

        //   if(isEmpty) return <h2 className='text-center text-2xl text-black'>No Items</h2>

   
  return (
    <>
    <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-brand-red font-bold uppercase text-sm   rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
           
             <div className="p-2 rounded-full bg-brand-red flex  items-center text-white">
                 <div className="relative inline-block px-1">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-brand-red rounded-full ">{totalUniqueItems}</span>
                 </div>
                         
                          <span className='text-sm mx-4'>  ${cartTotal}</span>
                       </div>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ")+
                "text-base z-50  py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
              }
              style={{ minWidth: "20rem" }}
            >
                   <div className="flex flex-col items-center " >
                        
                            {items.map((item,index)=>{
                                return(
                                    
                                <div className="p-1 w-full border-2 bg-brand-gray grid gap-2 grid-cols-4 items-center " key={index}>
                                    <div className="h-auto w-20 ">
                                        <img src={item.img} alt="No-Image-Found" />
                                    </div>
                                    <div className="px-1 flex flex-col col-span-2">
                                        <p className='text-sm text-brand-black'>{item.title}</p>
                                        <p className='text-md font-bold text-brand-black'>Price : $ {item.price}</p>
                                        <div className="grid grid-cols-3 items-center border-2 rounded-full w-auto">
                                                <button className='p-1 bg-brand-red text-white text-sm' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                                <p className='text-lg text-center text-brand-black font-bold'>{item.quantity}</p>
                                                <button className='p-1 bg-brand-red text-white text-sm' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            

                                        </div>
                                        

                                    </div>
                                        <div className="px-2">
                                            <button className='bg-brand-red px-2 text-sm py-1'  onClick={()=>removeItem(item.id)}>Remove</button>
                                        </div>

                                </div>

                        
                                )
                            })}
                   </div>
         

            <div className="m-auto flex flex-row justify-center">
        <hr/>
        <button className='px-4 py-2 m-1 bg-brand-red hover:bg-brand-black text-white text-xs' onClick={()=>emptyCart()}>Clear Cart</button>
         <button className='px-3 py-2 m-1 bg-brand-red hover:bg-brand-black text-white text-xs '>Pay Now</button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DropDown
