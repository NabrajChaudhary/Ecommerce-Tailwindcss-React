import React from 'react'
import LogoImg from '../../Img/Logo.png'
import DropDown from '../DropDown';

const Navbar = () => {
     const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
   <>
   <nav className="relative flex flex-wrap items-center justify-between bg-brand-black py-4 md:py-4 w-full">
        <div className="container px-4 w-10/10 md:w-10/12  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 "
              href="/"
            >
               <div className="logo p-2 ">
                <img src={LogoImg} alt="" />
                
            </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-col md:flex-col w-full md:w-auto md:flex-grow bg-brand-black md:bg-brand-black items-end py-2 md:py-0" +
              (navbarOpen ? " flex" : " hidden")
            } 
    
            id="example-navbar-danger"
          >
            <ul className="grid grid-cols-2 md:flex  lg:flex-row list-none lg:ml-auto md:px-6 md:mb-2" >
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm  leading-snug  text-white hover:opacity-75"
                  href="/"
                >
                  My Account &nbsp;&nbsp;|
                </a>
              </li>
              <li className="nav-item">
                  <a
                  className="px-3 py-2 flex items-center text-sm  leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Wishlist&nbsp;&nbsp;|
                </a>
              </li>
              <li className="nav-item">
                 <a
                  className="px-3 py-2 flex items-center text-sm  leading-snug  text-white hover:opacity-75"
                  href="/"
                >
                  My Cart&nbsp;&nbsp;|
                </a>
              </li>
               <li className="nav-item">
                 <a
                  className="px-3 py-2 flex items-center text-sm  leading-snug  text-white hover:opacity-75"
                  href="/"
                >
                  Checkout&nbsp;&nbsp;|
                </a>
              </li>
              <li className="nav-item">
                 <a
                  className="px-3 py-2 flex items-center text-sm  leading-snug  text-white hover:opacity-75"
                  href="/"
                >
                 Login
                </a>
              </li>

            </ul>
             <div className=" w-12/12 md:w-8/12 px-4 grid grid-cols-1 md:grid-cols-4 md:my-2 gap-4">
                   <div className="md:col-span-3">
                         <form action=""className='flex flex-row shadow-xl  items-center min-h-full'>
                            <input className='px-2 bg-white text-white w-9/12 md:w-10/12  py-2' type="text" placeholder="Search.." name="search"/>
                            <button type="submit" className='bg-brand-red w-3/12 md:w-1/12 p-2 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                    </form>
                   </div>
                   <div className=" col-span-1 flex flex-row gap-2 items-center mx-2">
                       {/* <div className="p-2 rounded-full bg-brand-red flex  items-center text-white">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                       </div> */}
                       <div className="flex flex-col items-center text-white">
                           {/* <h3 className='leading-3 text-xs uppercase'>Total</h3>
                           <h3 className='text-md font-medium '>$500</h3> */}
                           <DropDown/>
                       </div>

                       </div>
            </div>
          </div>

          
        </div>
      </nav>
       

       <nav className="relative flex flex-wrap  bg-brand-red md:py-2 w-full">
        <div className="container px-4 w-10/10 md:w-10/12  mx-auto flex flex-wrap ">
         
          <div
            className={
              "lg:flex flex-col md:flex-row  py-2 md:py-0" +
              (navbarOpen ? " flex" : " hidden")
            } 
    
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto md:gap-x-4" >
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Home
                </a>
              </li>
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  About us
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Clothing
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Electronics Hot
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Health & Beauty
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Watches
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Jewellery
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-light leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  Shoes
                </a>
              </li>

            </ul>
           
          </div>

          
        </div>
      </nav>


   </>
  )
}

export default Navbar