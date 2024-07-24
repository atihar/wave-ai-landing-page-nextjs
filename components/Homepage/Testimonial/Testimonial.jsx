'use client'
import { FaStar } from "react-icons/fa";
import { images } from "@/public/assets";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    rating: 5,
    title: "So Good",
    review: `This app is limitless and its ability to process information is great. 
      I tried three different software AI Claudia, and this the price range was about the same. 
      In fact, being unlimited it is a really good option. I'm amazed and the service if not 
      cheaper at the same price because literally can't find any better deal than this.`,
    author: "Shezishah",
    date: "2 days ago",
    platform: "Apple App Store",
  },
  {
    rating: 4,
    title: "Excellent Experience",
    review: `I've been using this app for a while now, and I must say, it has exceeded my expectations. 
      The user interface is intuitive, and the AI capabilities are impressive. Definitely recommend it!`,
    author: "John Doe",
    date: "5 days ago",
    platform: "Google Play Store",
  },
  {
    rating: 3,
    title: "Could be better",
    review: `The app has potential, but there are some bugs that need to be fixed. 
      Also, the pricing could be more competitive compared to similar apps on the market.`,
    author: "Jane Smith",
    date: "1 week ago",
    platform: "Amazon Appstore",
  },
];

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-[60px] h-[60px] rounded-full bg-white text-gray-800 border flex justify-center items-center font-semibold hover:scale-95  transition-all duration-300"
    >
      <MdOutlineKeyboardArrowRight size={24} />
    </button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="w-[60px] h-[60px] rounded-full bg-white text-gray-800 border flex justify-center items-center font-semibold hover:scale-95transition-all duration-300"
    >
      <MdOutlineKeyboardArrowLeft size={24} />
    </button>
  );
};

const Testimonial = () => {
  const imageRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      x: -200,
      y: 200,
      opacity: 0.6,
      ease: "power1.out",
      duration: 1.5, rotate: 10,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        end: "center 80%",
        scrub: true,
      },
    });
    gsap.from(sliderRef.current, {
    //   x: 200,
    //   y: 200,
      opacity: 0,
      ease: "power1.out",
      duration: 0.7, delay:1,
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 90%",
        end: "center 80%",
        scrub: true,
      },
    });
  });
  
  return (
    <div className="bg-[#FFFDE4] relative overflow-hidden" id="testimonial">
      <div className="absolute top-0 right-0 z-0">
        <img
          src={'/assets/images/testimonialBg.png'}
          alt="testimonial bg"
          loading="lazy"
          className="relative"
        />
      </div>
      <div className="max-w-[1240px] w-full mx-auto py-24 px-4 z-10">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div>
            <h1 className="text-5xl lg:text-6xl font-[500] text-black text-center lg:text-left font-primary whitespace-nowrap mb-16 lg:mb-28 z-10 relative">
              What they said <br />
              about Wave
            </h1>
            <div ref={imageRef} className="relative z-10 hidden lg:block">
              <img
                src={'/assets/images/testimonial.png'}
                alt="testimonial image"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>

          {/* slider options */}
          <div
            ref={sliderRef}
            className="self-center lg:self-end max-w-[550px] w-full relative"
          >
            <Swiper
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={30}
              loop={true}
              className="relative"
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            >
              {testimonialsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white relative rounded-2xl text-black ">
                    <div className="h-[504px] p-8 space-y-5 rounded-2xl">
                      <div className="text-red-500 flex items-center gap-3">
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                        <FaStar size={24} />
                      </div>
                      <p className="text-2xl font-[500]">{item.title}</p>
                      <p className="text-xl">{item.review}</p>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">{item.author}</p>
                        <p>
                          <span>{item.date}</span> on{" "}
                          <span>{item.platform}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* bottom part */}
              <div className="bg-[#F1F1F1] p-6 rounded-b-2xl flex items-center justify-between absolute bottom-0 right-0 left-0 z-10">
                <p className="text-2xl text-[#111315]">
                  <span>{currentSlide}</span>
                  <span className="text-gray-600"> / {testimonialsData.length}</span>
                </p>
                <div className="flex items-center gap-5">
                  <SwiperButtonPrev />
                  <SwiperButtonNext />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
