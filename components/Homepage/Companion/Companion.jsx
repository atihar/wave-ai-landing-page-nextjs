'use client'
import  { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone } from "react-icons/fa";
import { images } from "@/public/assets";
import "./Companion.css";

gsap.registerPlugin(ScrollTrigger);

const Companion = () => {
  useEffect(() => {
    // Animation for the main companion image
    gsap.fromTo(
      ".companion",
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".companion",
          start: "top 80%",
          end: "center 70%",
          scrub: true,
        },
      }
    );
    // gsap.fromTo(
    //   ".icon-left",
    //   { opacity: 0, x: -50 },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 0.4,
    //     stagger: 0.4,
    //     ease: "power4.Out",
    //     scrollTrigger: {
    //       trigger: ".icon-left",
    //       start: "top bottom",
    //       end: "top center",
    //       endTrigger: ".companion",
    //       // toggleActions: "play none none reverse",
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="bg-primary py-24 flex flex-col items-center">
      <div className="space-y-5">
        <h1 className="text-[48px] font-primary font-semibold text-center max-w-[640px] w-full mx-auto px-5 leading-tight">
          Take Your AI Companion Anywhere, Anytime
        </h1>
        <p className="body2 text-center max-w-[640px] w-full mx-auto px-5">
          Embrace spontaneity. Life&apos;s important moments unfold beyond the
          confines of the office. Capture them with Wave.
        </p>
      </div>

      {/* Image div */}
      <div className="relative mt-16 px-5">
        <div>
          <img
            src={'/assets/images/companion.png'}
            alt="companion image"
            loading="lazy"
            className="companion w-[290px] md:w-[320px] lg:w-full"
          />
        </div>
        {/* left side */}
        <p className="companion-icon icon-left absolute top-6 lg:top-16 -left-4 lg:-left-40">
          <FaPhone /> Record
        </p>
        <p className="companion-icon icon-left absolute top-20 lg:top-1/3 -left-8 lg:-left-20">
          <FaPhone /> Transcribe
        </p>
        <p className="companion-icon icon-left absolute bottom-8 lg:bottom-1/3 -left-4 lg:-left-36">
          <FaPhone /> Phone
        </p>
        <p className="companion-icon icon-left absolute -bottom-4 lg:bottom-12 left-12 lg:-left-12">
          <FaPhone /> Siri
        </p>

        {/* right side */}
        <p className="companion-icon icon-right absolute top-6 -right-4 lg:top-16 lg:-right-44">
          <FaPhone /> Summarize
        </p>
        <p className="companion-icon icon-right absolute top-20 -right-8 lg:top-1/3 lg:-right-16">
          <FaPhone /> Import
        </p>
        <p className="companion-icon icon-right absolute bottom-8 -right-4 lg:bottom-1/3 lg:-right-44">
          <FaPhone /> Languages
        </p>
        <p className="companion-icon icon-right absolute -bottom-4 right-12 lg:bottom-12 lg:-right-12">
          <FaPhone /> Share
        </p>
      </div>
    </div>
  );
};

export default Companion;
