'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



const Steps = () => {
  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentTab, setCurrentTab] = useState(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: dotRef.current,
      start: "top 20%",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
    // gsap.to(dotRef.current, {
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     pin: true,
    //   },
    // });
    // gsap.to(cardRef.current, {
    //   scrollTrigger: {
    //     trigger: cardRef.current,
    //     start: "top 50%",
    //     scrub: true,
    //     pin:false
    //   },
    // });
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);

    cardRefs.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentTab(index),
        onEnterBack: () => setCurrentTab(index),
        markers: true,
        scrub: true,
      });
    });
  });


  return (
    <div className="bg-secondary" ref={containerRef} >
      <div className="max-w-[1240px] w-full mx-auto px-4 py-20 overflow-hidden" id="smooth-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_6fr] gap-7"  id="smooth-content">
          <div ref={dotRef} className="h-full">
            <h1 className="text-5xl font-semibold font-primary">
              One button is all it <br /> takes to record a Wave
            </h1>

            <div className="h-full mt-12 flex gap-7 relative">
              <div className="w-[1px] h-full bg-white"></div>
              <div className="circle size-[10.69px] bg-[#00FFFF] rounded-full absolute -left-[5px]"></div>
              <div className="space-y-4 text-[#ffffff60]">
                <p className={currentTab === 0 ? "text-white" : ""}>Record Audio</p>
                <p className={currentTab === 1 ? "text-white" : ""}>Transcribe Audio</p>
                <p className={currentTab === 2 ? "text-white" : ""}>Summarize Audio</p>
              </div>
            </div>
          </div>

          {/* right side grid */}
          <ReactLenis orientation={"horizontal"} wheelMultiplier={35} options={{ lerp: 0.7, duration: 0.1, smoothTouch: true }}>
            <p className="text-2xl">
              Over 1,679,891 minutes of audio have been processed processed with
              Wave.
            </p>
            <div className="mt-16 space-y-8">
              {/* card 1 */}
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px]" ref={(el) => (cardRefs.current[0] = el)}>
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
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px]" ref={(el) => (cardRefs.current[1] = el)}>
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
              <div className="bg-[#766EFF] rounded-[30px] relative h-[540px] overflow-hidden" ref={(el) => (cardRefs.current[2] = el)}>
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
          </ReactLenis>
        </div>
      </div>
    </div>
  );
};

export default Steps;
