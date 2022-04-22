import React from 'react'
import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper';
import Data from '../../Data/data.js'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import SideNavCom from '../SideNavCom/index.jsx';



  const SliderData =[
        {
            id: 1,
            img: './Img/Layer 5.png',
            imgTextTopText1: 'Collection 2022',
            imgTextTopText2: 'Save 50% for',
            imgTextTopText3: 'First Purchase',
            buttonTitle: 'Shop Now',
            imgtextBottomTextHeader1: 'Money Back',
            imgtextBottomText1: '30 Days Money Back guarantee',
            imgtextBottomTextHeader2: 'Money Back',
            imgtextBottomText2: 'Free Shipping',
            imgtextBottomTextHeader3: 'Special Sale',
            imgtextBottomText3: 'Extra $5 off on all items',
        },
        {
            id: 2,
            img: './Img/Layer 5.png',
            imgTextTopText1: 'Collection 2022',
            imgTextTopText2: 'Save 50% for',
            imgTextTopText3: 'First Purchase',
            buttonTitle: 'Shop Now',
            imgtextBottomTextHeader1: 'Money Back',
            imgtextBottomText1: '30 Days Money Back guarantee',
            imgtextBottomTextHeader2: 'Money Back',
            imgtextBottomText2: 'Free Shipping',
            imgtextBottomTextHeader3: 'Special Sale',
            imgtextBottomText3: 'Extra $5 off on all items',
        },
        {
            id: 3,
            img: './Img/Layer 5.png',
            imgTextTopText1: 'Collection 2022',
            imgTextTopText2: 'Save 50% for',
            imgTextTopText3: 'First Purchase',
            buttonTitle: 'Shop Now',
            imgtextBottomTextHeader1: 'Money Back',
            imgtextBottomText1: '30 Days Money Back guarantee',
            imgtextBottomTextHeader2: 'Money Back',
            imgtextBottomText2: 'Free Shipping',
            imgtextBottomTextHeader3: 'Special Sale',
            imgtextBottomText3: 'Extra $5 off on all items',
        },
        {
            id: 4,
            img: './Img/Layer 5.png',
            imgTextTopText1: 'Collection 2022',
            imgTextTopText2: 'Save 50% for',
            imgTextTopText3: 'First Purchase',
            buttonTitle: 'Shop Now',
            imgtextBottomTextHeader1: 'Money Back',
            imgtextBottomText1: '30 Days Money Back guarantee',
            imgtextBottomTextHeader2: 'Money Back',
            imgtextBottomText2: 'Free Shipping',
            imgtextBottomTextHeader3: 'Special Sale',
            imgtextBottomText3: 'Extra $5 off on all items',
        },
    ]

const Hero = () => {

  return (
    <>
    <header>

    </header>
    <section className='w-full bg-brand-gray'>
        <div className="container bg-brand-gray w-full md:w-10/12 md:m-auto md:px-3">
            <div className="flex md:flex-row md:gap-4">
                <div className="bg-white hidden md:block md:w-3/12 p-0 m-0">
                    <div className="flex flex-col items-left">
                        
                        {Data.SideNavData.map((item,index)=>{
                            return(
                                    <SideNavCom Link={item.Link} linkTitle={item.LinkText} key={index}/>
                            )
                        })}
                    

                    </div>
                  
                </div>
                <div className="w-full md:w-9/12 p-0 m-0">
                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation
                         autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                    
                        className="mySwiper"
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >

                            {SliderData.map(( {id,img,imgTextTopText1,imgTextTopText2,imgTextTopText3,buttonTitle,imgtextBottomTextHeader1,imgtextBottomTextHeader2,imgtextBottomTextHeader3,imgtextBottomText1,imgtextBottomText2,imgtextBottomText3})=>(
                                <SwiperSlide className="flex justify-center" key={id}>
                           <div className="relative">
                                <img src={img} alt="" className='flex justify-center' />
                                <div className="hidden md:block md:absolute top-10 left-6 w-6/12 py-4">
                                    <div className="flex flex-col justify-center gap-y-2">
                                        <h3 className='text-4xl text-center text-brand-black uppercase font-black '>{imgTextTopText1}</h3>
                                        <h3 className="text-6xl font-semibold uppercase text-center text-white">{imgTextTopText2}</h3>
                                        <h3 className='text-2xl text-center text-white font-bold uppercase'>{imgTextTopText3}</h3>

                                        <div className="flex justify-center mt-4">
                                            <button type='button' className='border-2 px-4 py-2 flex justify-center text-xl font-bold hover:bg-brand-red hover:text-white hover:outline-none'>{buttonTitle}</button>
                                        </div>
                                    </div>
                                </div>
                            <div className="hidden md:block md:absolute bottom-2  bg-brand-red w-full ">
                                    <a href="/" className="grid grid-cols-3 gap-2">
                                        <div className="flex flex-col py-5">
                                                <h3 className='text-md text-white font-normal uppercase text-center'>{imgtextBottomTextHeader1}</h3>
                                                <p className='text-sm text-center text-white font-light capitalize'>{imgtextBottomText1}</p>
                                        </div>
                                        <div className="flex flex-col py-5">
                                                <h3 className='text-md text-white font-normal uppercase text-center'>{imgtextBottomTextHeader2}</h3>
                                                <p className='text-sm text-center text-white font-light capitalize'>{imgtextBottomText2}</p>
                                        </div>
                                        <div className="flex flex-col py-5">
                                                <h3 className='text-md text-white font-normal uppercase text-center'>{imgtextBottomTextHeader3}</h3>
                                                <p className='text-sm text-center text-white font-light capitalize'>{imgtextBottomText3}</p>
                                        </div>
                                    </a>
                                 
                            </div>
                           </div>
                         
                        </SwiperSlide>
                            ))}
                        
                      
                        
                        </Swiper>
                </div>
            </div>
            {/* <div className="grid grid-cols-6 gap-2 my-2">
                {Data.productData.map((item,index)=>{
                    return(
                    <ItemCard Img={item.img} ItemTitle={item.title} ItemDesc={item.description} ItemPrice={item.price} key={index}  />
                    )

                })}
                
            </div> */}

        </div>

    </section>
    </>
  )
}

export default Hero