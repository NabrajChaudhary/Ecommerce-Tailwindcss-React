import React,{useState} from 'react'
import Data from '../../Data/data.js';
import ItemCard from '../ItemCard';

const ProductSection = (props) => {
    const [noOfElement,setnoOfElement] = useState(6);
    const loadMore = () =>{
        setnoOfElement(noOfElement + noOfElement);    };


    const slice = Data.productData.slice(0,noOfElement);
  return (
       <section className='w-full bg-brand-gray'>
           
        <div className="container bg-brand-white w-full md:w-10/12 md:m-auto px-2 md:px-3 py-4">
          
                
          
           <div className="bg-white flex flex-col justify-center">
               <h2 className=" p-2 text-xl font-bold flex justify-start text-brand-black ">New Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-6 py-2 gap-2 md:gap-4 place-content-center">
                {slice.map((item,index)=>{
                    return(
                    <ItemCard Img={item.img} ItemTitle={item.title} ItemDesc={item.description} ItemPrice={item.price} key={index} item={item}  />
                    )

                })}
            </div>
    <button 
    className='bg-brand-red text-md text-white shadow-lg px-3 py-2 mt-4'
    onClick={()=> loadMore()}
    >Show More</button>

           </div>
               
                    

            </div>
            </section>
  )
}

export default ProductSection