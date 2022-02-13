import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = (props) => {
  return (
    <>
     <SwiperSlide className="flex justify-center">
                           <div className="relative">
                                <img src={props.SliderImg} alt="" className='flex justify-center' />
                                <div className="hidden md:block md:absolute top-10 left-6 w-6/12 py-4">
                                    <div className="flex flex-col justify-center gap-y-2">
                                        <h3 className='text-4xl text-center text-brand-black uppercase font-black '>{props.SliderTopText}</h3>
                                        <h3 className="text-6xl font-semibold uppercase text-center text-white">{props.SliderMiddleText}</h3>
                                        <h3 className='text-2xl text-center text-white font-bold uppercase'>{props.props.SliderBottomText}</h3>

                                        <div className="flex justify-center mt-4">
                                            <button type='button' className='border-2 px-4 py-2 flex justify-center text-xl font-bold hover:bg-brand-red hover:text-white hover:outline-none'>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            <div className="hidden md:block md:absolute bottom-2  bg-brand-red w-full ">
                                    <a href="/" className="grid grid-cols-3 gap-2">
                                        <div className="flex justify-center py-5">
                                                <h3 className='text-md text-white font-normal uppercase text-center'>{props.BottomTextTitle}</h3>
                                                <p className='text-sm text-center text-white font-light capitalize'>{props.BottomText}</p>
                                        </div>
                                        
                                    </a>
                                 
                            </div>
                           </div>
                         
                        </SwiperSlide>
    </>
  )
}

export default Slider