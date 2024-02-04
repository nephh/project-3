import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRIght} from "react-icons/rx"

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
    <div className='flex items-center justify-center flex-col h-screen bg-slate-700'>
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
        freeMode= {true}
        pagination={{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='max-w-3xl lg:max-w-4xl'    
        >
        {testData.map((item)=> (
            <SwiperSlide key={item.title}>
                <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 lg:h-[400px] lg:w-[350px]'>

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider
