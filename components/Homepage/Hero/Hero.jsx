'use client'
import gsap from "gsap";
import { images } from "@/public/assets";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".word", {
      opacity: 0,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
    gsap.from(".sub-heading", { opacity: 0, y: 20, duration: 0.5, delay: 1 });
    gsap.from(".appstoreLogo", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 1.2,
    });
    gsap.from(".hero", {
      opacity: 0,
      x: 300,
      scale: 1,
      duration: 0.5,
      delay: 1.2,
    });
  }, []);

  return (
    <div className="bg-secondary relative overflow-hidden min-h-screen">
      <div className="max-w-[1240px] w-full mx-auto py-24 relative z-10">
        <div className="space-y-8 md:space-y-10">
          <h1 className="heading text-5xl md:text-6xl lg:text-[100px] font-primary text-center md:text-left leading-tight">
            <span className="word">Fed</span> <span className="word">up</span>{" "}
            <span className="word">with</span>{" "}
            <span className="word">scribbling</span>{" "}
            <span className="word">notes</span>{" "}
            <span className="word">during</span> <span className="word"> </span>
            <span className="word text-[#00FFFF]">walk</span>{" "}
            <span className="word text-[#00FFFF]"> & </span>{" "}
            <span className="word text-[#00FFFF]">talks</span>
          </h1>
          <p className="sub-heading body2 max-w-2xl w-full max-md:mx-auto text-center md:text-left leading-tight">
            Wave: AI-powered transcription and summarization for audio and calls
            in any language. Capturing and understanding crucial information,
            wherever you are.
          </p>
          <div className="appstoreLogo flex justify-center md:justify-start cursor-pointer ">
            <img
              src={'/assets/images/logo/appStoreLogo.png'}
              alt="app store logo"
              className="object-cover hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="hero absolute bottom-0 -right-60 md:right-0 z-0">
        <img
          src={'/assets/images/hero.png'}
          alt="hero image"
          className="object-cover"
          loading="lazy"
          // style={{ objectPosition: "right top" }}
        />
      </div>
    </div>
  );
};

export default Hero;
