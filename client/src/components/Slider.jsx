import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import { FreeMode, Pagination, EffectCoverflow } from "swiper/modules";

//Test data until we have a backend
const testData = [
  {
    title: "Hello",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    title: "HI",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    title: "Sarah",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    title: "Johnny",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    title: "Baxter",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
  {
    title: "Mary",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
  },
];

const Slider = ({ endeavors }) => {
  //console.log(endeavors)
  return (
    <div className="flex flex-col items-center justify-center bg-opacity-0 py-3">
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        // TEST regular swiper
        // freeMode= {true}
        // pagination={{
        //     clickable: true
        // }}
        // modules={[FreeMode, Pagination]}
        // className='max-w-[90%] lg:max-w-[80%]'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-[90%] py-8 lg:max-w-[80%]"
      >
        {endeavors.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="group relative my-1 flex h-[350px] w-[300px] cursor-pointer flex-col gap-6 overflow-hidden  rounded-xl border-2 border-slate-900 text-white shadow-lg lg:h-[350px] lg:w-[375px]">
              {/* bg image container */}
              <div className="absolute inset-0 bg-opacity-75 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 bg-center py-3 brightness-75">
                <div className="relative flex flex-col gap-3 px-6">
                  <p className="border-b-2 border-neutral-100 pb-1 text-center text-2xl h-[35px] font-bold text-white drop-shadow-lg">
                    Endeavors
                  </p>
                  <h1 className="text-2xl font-bold text-black h-[50px] flex flex-wrap justify-center content-center">
                    {item.title}
                  </h1>
                  {/* Scrollbar wonky, maybe hide scrollbar with css class */}
                  <p className="text-black h-[80px] overflow-hidden hover:overflow-y-scroll">{item.content}</p>
                  <p className="pb-1 text-white h-[50px]">{item.community}</p>
                </div>
                <img
                  className="h-[100px] w-full object-cover object-center absolute bottom-0 left-0 "
                  src={`/images/${item.image}`}
                  alt={item.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
