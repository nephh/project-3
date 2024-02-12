import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-coverflow'
import { FreeMode, Pagination, EffectCoverflow } from 'swiper/modules'

//Test data until we have a backend
const testData = [
    {
        title: "Hello",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        title: "HI",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        title: "Sarah",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        title: "Johnny",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        title: "Baxter",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        title: "Mary",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    
]

const Slider = ({ endeavors }) => {
    //console.log(endeavors)
  return (
    <div className='flex items-center justify-center flex-col bg-opacity-0 py-3'>
        <Swiper 
        breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }}
        // TEST regular swiper
        // freeMode= {true}
        // pagination={{
        //     clickable: true
        // }}
        // modules={[FreeMode, Pagination]}
        // className='max-w-[90%] lg:max-w-[80%]'    
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='max-w-[90%] lg:max-w-[80%] py-8'
        >
        {endeavors.map((item)=> (
            <SwiperSlide key={item.title}>
                <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl border-2 border-white px-6 py-3 my-1 h-[300px] w-[300px] lg:h-[350px] lg:w-[375px] overflow-hidden cursor-pointer'>
                    {/* bg image container */}
                    <div className='absolute inset-0 bg-opacity-75 bg-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800 grayscale brightness-75'/>
                    <div className='relative flex flex-col gap-3'>
                        <p className="border-b-2 border-neutral-100 pb-1 text-center text-2xl font-bold text-white drop-shadow-lg">Endeavors</p>
                        <h1 className='text-2xl font-bold text-black'>{item.title}</h1>
                        <p className='text-black'>{item.content}</p>
                        <p className='text-white'>{item.community}</p>
                        <img className='h-[50px]' src={`/images/${item.image}`} alt={item.image} />
                    </div>

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider
