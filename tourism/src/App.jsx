import { useEffect, useState } from 'react'
import Nav from './components/nav'
import imag from './assets/maredumilli.png'
import { FaCar,FaTrain } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import SimpleImageSlider from "react-simple-image-slider";

function App() {
    const numbers=["8919993013","891999301"]
    const [places,setPlaces]=useState([
        {"placeName":"Gudisa Hill Station","url":["https://www.jollydaytours.com/uploads/0000/1/2020/12/11/camping.jpg"],"description":"Unlike most tourist destinations, Gudisa is not accessible by regular vehicles. The winding, narrow paths leading up the hills require special vehicles like jeeps or 4x4s. But don't fret! These vehicles can be easily booked through local tour operators or villages near Gudisa. This unique approach adds a touch of adventure to your journey and ensures the pristine beauty of the hill station remains untouched. The true magic of Gudisa unfolds as the sun paints the sky with its golden hues. Witnessing the sunrise from the hilltop is an experience etched in memory forever. The mist-shrouded valleys, the lush forests awakening to the day's light, and the gradual dance of colors across the horizon create a scene of breathtaking beauty."},
        {"placeName":"Campfire","url":["https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg","https://www.jollydaytours.com/uploads/0000/1/2020/12/15/gudisa.jpg"],"description":"In Maredumilli, the campfire isn't just a camping necessity; it's an experience. Here, the flames become a canvas for shadows that dance to the wind's song. Sparks rise like miniature stars, igniting the darkness with fleeting moments of wonder. As the night deepens, the fire transforms into a silent storyteller, its embers glowing with tales of the forest's hidden secrets."},
        {"placeName":"Bamboo Chicken","url":["https://im.rediff.com/getahead/2023/sep/22food-bamboo-chicken1.jpg?w=670&h=900","https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg"],"description":"Bamboo Chicken is not just a culinary delight; it's a cultural experience. It's a story whispered through generations, passed down from mother to daughter, father to son. It's a connection to the land, a celebration of community, and a testament to the resourcefulness of the Maredumilli people."},
        {"placeName":"Bhupathipalem Reservoir","url":["https://media-cdn.tripadvisor.com/media/photo-s/1c/8d/37/39/bhupathipalem-reservoir.jpg","https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg"],"description":"Whether you're seeking a peaceful retreat, an adrenaline rush, or a cultural immersion, Bhupathipalem Reservoir has something to offer everyone. So pack your bags, grab your sense of adventure, and head to this hidden gem in Maredumilli for an unforgettable experience."},
        {"placeName":"Jalatharangini Waterfalls","url":["https://www.trawell.in/admin/images/upload/245150916Maredumilli_amruthadhara_Falls.jpg","https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg"],"description":"Jalatharangini isn't just one waterfall; it's a series of cascading falls, each adding its own unique charm to the scene. The water plunges over sculpted rocks, creating pools and mist that shimmer under the sun. The highest tier boasts an impressive drop, while the lower tiers offer gentle cascades perfect for soaking in the refreshing spray."},
        {"placeName":"Pamuleru Waterfalls","url":["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0_IPHCTOqIoPG40bc2J3cPQM5wzkj_PloEuWM1J7W3g8fQBFRSEZZhbk7oa80Wk-KkfJwKY9gfffwdEaacCU7yW3n-a9mrftRDG7tdEVVD7oRat6N8bNU2q8wvimitqOfUhmxHm7wgq3GNfawNJ-R2HIi9wR-DW4kQA_k-yG7UUN0NtMrEdZF3bEHd_Y8/s719/IMG_20231015_173312.jpg","https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg"],"description":"Standing tall at 100 feet, Pamuleru Waterfalls thunder down the granite cliffs, painting the air with a fine mist that dances in the sunlight. The cool spray refreshes your face as you approach the base, where a crystal-clear pool beckons you to take a dip. The force of the water carving its way through the rocks creates a natural jacuzzi, perfect for a rejuvenating massage."},
        {"placeName":"Rampa Waterfalls","url":["https://www.trawell.in/admin/images/upload/2451501000Maredumilli_Rampa_Falls.jpg","https://viharitours.in/assets/images/holiday-resort-maredumilli-2-506x337.jpg"],"description":"Surrounded by dense forests teeming with diverse flora and fauna, the waterfalls exude a raw and untamed charm. The mist rising from the cascading water creates a mystical ambiance, while the vibrant green canvas of the surrounding hills adds to the visual delight."},
    ])
    const [stops,setStops]=useState([
        {"shopName":"Tea Time","img":`${imag}`,"map":"https://maps.app.goo.gl/Kcgqe5gq6mi8Debr9"},
        {"shopName":"Clothing store","img":`${imag}`,"map":"https://maps.app.goo.gl/Kcgqe5gq6mi8Debr9"},
        {"shopName":"Mechanic Shop","img":`${imag}`,"map":"https://maps.app.goo.gl/Kcgqe5gq6mi8Debr9"},
        
        // {"shopName":"","img":"","map":""},
    ])
  const [openCard,setCard]=useState(true)
  const [cardData,setData]=useState()
  const addData = (option,value) =>{
    setCard(!openCard)
    if(option==="places"){
        setData(places[value])
    }
    

  }
  const openMap = (link) =>{
    window.open(link, '_blank');
    confirm(link)
  }
  
  return (
    <>
    <header>
        <Nav/>
     </header>

    {(openCard && cardData) &&  
    <div className='w-[100%] fixed z-40 h-[100dvh] flex justify-center mx-auto'  style={{"backgroundColor": "rgba(255, 255, 255, 0.3)","backdropFilter":"blur(10px)"}}>
        <div className=' rounded-lg p-5 w-[70%] max-sm:w-[90%] text-black max-h-[80%] h-fit    bg-[#fff]  relative top-[15%]  z-50 overflow-x-hidden overflow-y-scroll' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
            <div className='flex '>
                <div className='text-center  w-full'>
                    <h1 className='text-[32px] lg:text-[2.5vw] font-semibold'>{cardData.placeName}</h1>
                </div>
                <div className=' '>
                    <h1 className='md:text-[2vw] text-[25px] p-2 cursor-pointer fixed right-[17%] max-md:right-[8%] z-50' onClick={()=>{setCard(!openCard);setData()}}><IoClose /></h1>
                </div>
            </div>

            <div className='p-5 flex justify-center ' >
                <div style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}} className='p-2 max-md:hidden 2xl:hidden'>
                    <SimpleImageSlider
                    width={500}
                    height={250}
                    
                    images={cardData.url}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true} />
                </div>

                <div style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}} className='p-2  max-2xl:hidden'>
                    <SimpleImageSlider
                    width={1000}
                    height={550}
                    
                    images={cardData.url}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true} />
                </div>

                <div style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}} className='p-2 md:hidden'>
                    <SimpleImageSlider
                    width={300}
                    height={250}
                    
                    images={cardData.url}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true} />
                </div>

                
            </div>
            <div className='w-[100%]  items-center flex mt-5  '>
                <div>
                    
                    <p className='text-[1.5vw] max-lg:text-[2vw] max-sm:text-[15px]  '>{cardData.description}<br/>{cardData.contact && <p className='w-full text-center p-5 '>Call:-{numbers.map((item,key)=>(<a className='text-blue-500 underline' href={`tel:${item}`}>{item} {key !== (numbers.length - 1) && (<span>|</span>)} </a>))}</p>}</p>
                </div>
            </div>
            
        </div>

    </div>
    }


     <section className='min-h-[80dvh] h-auto  flex min-w-[100%]' style={{"backgroundImage": "url('https://1.bp.blogspot.com/-XKfrC3t7KzQ/V7g-BQhwxkI/AAAAAAAAEF8/LYDbgdG9iXAUxebM7LyALagjYslDr5phACLcB/s1600/DSC06020.jpg')", "backgroundRepeat":"no-repeat", "backgroundPosition": "center","backgroundSize": "cover"}}>
        <div className='flex flex-col w-[80%] max-md:w-full p-5 mx-auto justify-center z-10'>
            <div className='h-[70%]  flex flex-col justify-end font1'>
                <h1 className='p-2 text-[50px] lg:text-[3.5vw]  font-semibold'>Explore Maredumilli</h1>
                <h4 className='p-2 pt-0 lg:text-[1.2vw] '>Experience the scenery of nature</h4>
            </div>
        </div>
        <div className='absolute top-0 left-0 w-full min-h-[80dvh] z-0 ' style={{"background": "linear-gradient(0.50turn, #0000003f, transparent, black 100%)","zIndex":0}}/>
     </section>
     <section className='w-ful text-black'>
        <div className='text-center lg:text-[1vw] w-full p-3 shadow-lg'>
          <h1>Today's Weather <span><a className='text-blue-800' target="_blank" href='https://www.google.com/search?q=weather+in+maredumilli&oq=weather+in+m&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEC4YQNIBCTEwMDMwajBqMagCALACAA&sourceid=chrome&ie=UTF-8'>here</a></span></h1>
        </div>
     </section>




     {/* places */}


    <div id="destinations"/>
     <section className=' w-full text-center p-2 mt-10' >
      <h1 className='text-black font1 text-[32px] lg:text-[2.5vw] font-semibold m-5'>Places to visit</h1>
          <div onClick={()=>{addData("places",0)}} className='w-[35%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[90%]    mx-auto   rounded-[8px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.05] ' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
              <img src={places[0].url[0]} alt="Card Image" className='w-full lg:max-h-[19vw] '  />
              <div className='p-[16px] bg-[#fff]'>
                  <h2 className='mb-[8px] text-[#333] font1 font-semibold text-[1.5vw] max-lg:text-[2vw] max-sm:text-[20px]'>{places[0].placeName}</h2>
                  <p className=' text-[#666] lg:text-[1vw]'>Hevean Of Andhra</p>
              </div>
          </div>
     </section>

   
     <section className='w-full mt-5'>
          <div className='flex flex-wrap  whitespace-nowrap max-sm:justify-center max-sm:w-[100%]  w-[80%] gap-5 mx-auto'>
          {places.slice(1,).map((item,key)=>(
            
            <div key={key} onClick={()=>addData("places",key+1)} className='basis-[calc(33.333%-20px)] h-fit max-lg:basis-[calc(45%)] max-sm:basis-[calc(85%)]  rounded-[8px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.05] ' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
                            
            <img src={item.url[0]} alt="Card Image" className='w-full h-auto lg:max-h-[15vw]'  />
            <div className='p-[16px] bg-[#fff]'>
                <h2 className=' text-[#333] font1 font-semibold text-[1.5vw] max-lg:text-[2vw] max-sm:text-[20px]'>{item.placeName}</h2>
                
            </div>
            </div>
          ))}
          </div>
     </section>



     {/* Bookings */}

     <div id="bookings" />
     <section className='w-full mt-10 p-2 text-center'>
        <div>
          <h1 className='text-black font1 text-[32px] font-semibold m-5 lg:text-[2.5vw]'>Bookings</h1>
        </div>
        <div onClick={()=>{setData({"placeName":"Booking","url":["https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg","https://mountainvalley.in/gudisa/assets/images/gudisa-tour-packages-800x600.jpg"],"description":"Comfortable accommodation in Maredumilli for your chosen duration.Exclusive jeep transportation to and from Gudisa Hill Station.Experienced local guides to navigate the trails and share insights about the region.Flexible options to customize your experience with additional activities like trekking, rappelling, or cultural immersion.","contact":{numbers}});setCard(true)}} className='w-[45%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[90%]   mx-auto   rounded-[8px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.05] ' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
                        <div className='flex gap-2 max-sm:flex-col'>
                          <img src="https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="Card Image" className='sm:w-[50%]  max-sm:max-h-[250px]'  />
                          <img src="https://mountainvalley.in/gudisa/assets/images/gudisa-tour-packages-800x600.jpg" alt="Card Image" className='sm:w-[50%] max-sm:max-h-[250px]'  />
                        </div>
                        <div className='p-[16px] bg-[#fff]'> 
                            <h2 className='mb-[8px] text-[#333] font1 font-semibold text-[1.5vw] max-lg:text-[2vw] max-sm:text-[20px]'>Rooms And Gudisa Hill Station</h2>
                            <p className=' text-[#666] lg:text-[1vw]'>Contact:- {numbers.map((item,key)=>(<a className='text-blue-500 underline' href={`tel:${item}`}>{item} {key !== (numbers.length - 1) && (<span>|</span>)} </a>))}</p>
                        </div>
          </div>
     </section>


     {/* Essential Stops */}
     
     <section className='text-center mt-10'>
        <h1 className='text-black font1 text-[32px] lg:text-[2.5vw] font-semibold m-5'>Essential Stops</h1>
        <div className='flex justify-between  flex-wrap gap-5 w-[90%] mx-auto'>
            {stops.map((items,key)=>(
                <div key={key} className='basis-[calc(25%)] h-fit max-sm:basis-[calc(46%)]      rounded-[8px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.05] cursor-pointer' onClick={()=>{openMap(items.map)}} style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
                    <div className='flex gap-2 max-sm:flex-col '>
                            <img src={items.img} alt="Card Image" className='w-full max-sm:h-[40vw] lg:h-[15vw]'  />
                    </div>
                    <div className='p-[16px] bg-[#fff]'> 
                        <h2 className=' text-[#333] break-word font1 font-semibold text-[1.5vw] max-lg:text-[2vw] max-sm:text-[3.5vw]'>{items.shopName}</h2>
                        <p className=' text-[#666] lg:text-[1vw] text-[1.2vw] max-sm:text-[12px]'>Contact:- {numbers.map((item,key)=>(<a className='text-blue-500 underline' href={`tel:${item}`}>{item} {key !== (numbers.length - 1) && (<span>|</span>)} </a>))}</p>
                    </div>
                </div>

            ))}
                
                 
        </div>
          
     
     </section>



     {/* How to go */}

     <div id="togo"/>
     <section className='p-5 text-black text-center mt-10 bg-[#f4f4f4]'>
        <h1 className='  font1 text-[32px] lg:text-[2.5vw] font-semibold m-5'>How to go </h1>
        <div className='w-[50%] max-lg:w-[70%] max-sm:w-[95%] mx-auto   ' >
            <div className='flex justify-between  gap-5' >
                        <div className='p-10 bg-white rounded-full transition-transform duration-200 ease-in-out hover:scale-[1.05]' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
                            <FaCar className='text-[10vw] max-lg:text-[15vw] max-sm:text-[20vw]'/>
                        </div>
                        <div className='p-10 bg-white rounded-full transition-transform duration-200 ease-in-out hover:scale-[1.05]' style={{"boxShadow":"0 4px 8px rgba(0,0,0,0.1)"}}>
                            <FaTrain className='text-[10vw] max-lg:text-[15vw] max-sm:text-[20vw]'/>
                        </div>
                        
            </div>
        </div>
     </section>


     <footer className='mt-10 text-black text-center p-10'>
            <h1 className='text-[20px] lg:text-[1.5vw] font1 font-semibold'>visit<span className='cursive text-[46px] lg:text-[3.5vw]'>Maredumilli</span></h1>
            <p className=' text-[#666] lg:text-[1.2vw] text-[15px]'>{numbers.map((item,key)=>(<a className='text-blue-500 underline' href={`tel:${item}`}>{item} {key !== (numbers.length - 1) && (<span>|</span>)} </a>))}</p>
            <p>&copy; 2023 visit Maredumilli</p>
    </footer>

    </>
  )
}

export default App
