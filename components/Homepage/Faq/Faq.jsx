'use client'
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { images } from "@/public//assets";

const faqItems = [
  {
    title: "What is Wave?",
    content:
      "Wave is an AI-powered transcription and summarization tool designed to capture and summarize audio and calls in any language. It helps users capture crucial information from discussions, meetings, and more, making it accessible and easy to reference.",
    id: "animated-collapse-1",
  },
  {
    title: "How does Wave work?",
    content:
      "Wave uses advanced AI algorithms to analyze audio input in real-time. It transcribes spoken words into text and provides summaries of conversations or calls. Users can access these transcripts and summaries through the Wave app.",
    id: "animated-collapse-2",
  },
  {
    title: "Is there a limit on recording time?",
    content:
      "Wave does not impose a strict limit on recording time, but it depends on the storage capacity and internet connectivity of your device. Longer recordings may require adequate storage space and a stable internet connection.",
    id: "animated-collapse-3",
  },
  {
    title: "How accurate are the transcriptions?",
    content:
      "Wave aims for high accuracy in transcribing spoken content. The accuracy can vary based on factors such as audio quality, background noise, and speaker clarity. Users can review and edit transcripts as needed for improved accuracy.",
    id: "animated-collapse-4",
  },
  {
    title: "How can I customize my summaries?",
    content:
      "Wave offers customization options for summaries, allowing users to adjust settings for summarization length, key points to include, and formatting preferences. This customization helps tailor summaries to specific needs.",
    id: "animated-collapse-5",
  },
  {
    title: "Can I use Wave while using other apps or with my screen off?",
    content:
      "Yes, Wave supports background operation, enabling users to use other applications or turn off their device screen while recording or listening to audio. This feature enhances user flexibility and convenience.",
    id: "animated-collapse-6",
  },
  {
    title: "What about my privacy?",
    content:
      "Protecting user privacy is a priority for Wave. The app adheres to strict privacy policies and data security measures to safeguard user information and recordings. Users have control over their data and can manage privacy settings.",
    id: "animated-collapse-7",
  },
  {
    title: "Can I access Wave on multiple devices?",
    content:
      "Yes, Wave is designed to be accessible across multiple devices. Users can synchronize their recordings, transcripts, and summaries across devices, ensuring seamless access and continuity.",
    id: "animated-collapse-8",
  },
  {
    title: "What happens if I exceed my monthly recording limit?",
    content:
      "If you exceed your monthly recording limit, Wave may prompt you to upgrade your plan or manage your usage to stay within the limits. Upgrading may provide additional recording capacity and features.",
    id: "animated-collapse-9",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#FFFDE4] relative overflow-hidden lg:overflow-visible">
      <div className="max-w-[1380px] w-full mx-auto relative px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <h2 className="text-black font-semibold font-secondary text-5xl lg:text-6xl py-4 px-6 text-center lg:text-left">
              FAQs
            </h2>
          </div>
          {/* accordion */}
          <div className="lg:col-span-8 pb-20">
            {faqItems.map((item, index) => (
              <div key={item.id} className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-gray-300 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="flex-grow">{item.title}</span>
                    {activeIndex === index ? (
                      <FaChevronUp className="ml-auto" />
                    ) : (
                      <FaChevronDown className="ml-auto" />
                    )}
                  </button>
                </h6>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-4 text-sm leading-normal text-black">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* faw background image */}
      <div className="absolute -left-[200px] -bottom-[400px] lg:left-0 lg:-bottom-[380px] lg:z-0">
        <img
          src={'/assets/images/faq-bg.png'}
          alt="faq image"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Faq;
