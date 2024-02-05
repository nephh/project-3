import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/effect-coverflow'
import { FreeMode, Pagination, EffectCoverflow } from 'swiper/modules'


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

const Slider = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-zinc-700'>
        <Swiper 
        breakpoints={{
            340: {
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
        {testData.map((item)=> (
            <SwiperSlide key={item.title}>
                <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl border-2 border-white px-6 py-8 h-[320px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                    {/* bg image container */}
                    <div className='absolute inset-0 bg-lime-700 bg-center'/>
                    <div className='relative flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold text-black'>{item.title}</h1>
                        <p className='text-black'>{item.content}</p>
                    </div>

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider
