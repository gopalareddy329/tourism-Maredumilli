import React from 'react'
import { useState,useEffect } from 'react'
import { IoMenu,IoClose } from "react-icons/io5";

const Nav = () => {
  const [bg,setBg]=useState({'backgroundColor':"transparent","color":"#fff"})
  const [menu,setMenu]=useState(false)

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50){
        setBg({'backgroundColor':"white","color":"black","boxShadow":"0 4px 8px rgba(0,0,0,0.1)"});
        
      }
      else{
        setBg({'backgroundColor':"transparent","color":"white"});
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  const changeMenuState = () =>{
    setMenu(!menu)
  }
  return (
    <div className='fixed top-0 w-full z-50 ' style={bg}>
        <div className='m-auto flex   w-[90%] max-sm:w-[95%] max-lg:w-[80%] justify-between items-center px-5' >
          <div>
              <h1 className='text-[20px] lg:text-[1.5vw] font1 font-semibold'><a href='/'>visit<span className='cursive text-[46px] lg:text-[3.5vw]'>Maredumilli</span></a></h1>
          </div>
          <div className='flex gap-20  font1 text-[16px] lg:text-[1.2vw] drop-shadow-lg max-lg:hidden font-semibold' >
            <a href="#destinations" >Destinations</a>
            <a href='#bookings'>Bookings</a>
            <a href='#togo'>How to go</a>
          </div>
          <div className='lg:hidden relative'>
            {menu ? <IoClose size={30} style={{bg,"boxShadow":'none'}} className='cursor-pointer' onClick={changeMenuState}/>:<IoMenu size={30} style={{bg,"boxShadow":'none'}} className='cursor-pointer' onClick={changeMenuState}/>}
              <div className={menu ? 'flex absolute right-[0%] top-[4em]  max-lg:w-[70vw] font1 text-[16px] bg-white':'hidden'} >
                
                  <div className="flex flex-col w-full  justify-center gap-3 text-black p-5">
                    <a href="#destinations" className='border-b-2 border-b-gray p-5'>Destinations</a>
                    <a href='#bookings' className='border-b-2 border-b-gray p-5'>Bookings</a>
                    <a href='#togo' className='p-5'>How to go</a>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Nav