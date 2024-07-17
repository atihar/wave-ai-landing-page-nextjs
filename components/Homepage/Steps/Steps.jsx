'use client'
import { useGSAP } from "@gsap/react";
import { images } from "@/public/assets";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.to(dotRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
      },
    });
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 50%",
        scrub: true,
      },
    });
  });

  return (
    <div className="bg-secondary" ref={containerRef} >
      <div className="max-w-[1240px] w-full mx-auto px-4 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_6fr] gap-7 ">
          <div className="h-full">
            <h1 className="text-5xl font-semibold font-primary">
              One button is all it <br /> takes to record a Wave
            </h1>

            <div className="h-full mt-12 flex gap-7 relative">
              <div className="w-[1px] h-full bg-white"></div>
              <div className="circle size-[10.69px] bg-[#00FFFF] rounded-full absolute -left-[5px]"></div>
              <div ref={dotRef} className="space-y-4 text-[#ffffff60]">
                <p>Record Audio</p>
                <p>Transcribe Audio</p>
                <p>Summarize Audio</p>
              </div>
            </div>
          </div>

          {/* right side grid */}
          <div>
            <p className="text-2xl">
              Over 1,679,891 minutes of audio have been processed processed with
              Wave.
            </p>
            <div ref={cardRef} className="mt-16 space-y-8">
              {/* card 1 */}
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px]">
                <div className="absolute z-0">
                  <img src={'/assets/images/stepBg.png'} alt="" loading="lazy" />
                </div>
                <div className="absolute top-0 left-1/2  transform -translate-x-1/2">
                  <img src={'/assets/images/step1.png'} alt="" loading="lazy" />
                </div>

                <div className="px-12 pb-12 absolute bottom-0">
                  <p className="text-[32px] font-primary">01.</p>
                  <p>Tap the red button to begin recording.</p>
                </div>
              </div>
              {/* card 2 */}
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px]">
                <div className="absolute right-0 rotate-180 z-0">
                  <img src={'/assets/images/stepBg.png'} alt="" loading="lazy" />
                </div>
                <div className="absolute top-0  left-1/2  transform -translate-x-1/2">
                  <img
                    src={'assets/images/step2.png'}
                    alt=""
                    className="h-full max-w-[385px] w-full"
                    loading="lazy"
                  />
                </div>

                <div className="px-12 pb-12 absolute bottom-0">
                  <p className="text-[32px] font-primary">02.</p>
                  <p>When complete, Wave accurately transcribes the audio.</p>
                </div>
              </div>
              {/* card 3 */}
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px] overflow-hidden">
                <div className="absolute left-0 -bottom-[36px] -rotate-90 z-0 ">
                  <img src={"/assets/images/stepBg.png"} alt="" loading="lazy" />
                </div>
                <div className="absolute bottom-0 right-10">
                  <img src={"/assets/images/step3.png"} alt="" loading="lazy" />
                </div>

                <div className="px-12 pt-12 absolute top-0">
                  <p className="text-[32px] font-primary">03.</p>
                  <p>
                    Wave&apos;s AI pipeline turns the text into a useful summary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
