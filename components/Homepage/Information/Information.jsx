import { images } from "@/public/assets";

const Information = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1380px] w-full mx-auto px-4 pt-28 pb-40">
        <h1 className="text-5xl lg:text-6xl font-semibold text-center font-primary lg:whitespace-nowrap mb-[72px]">
          Do all these with Wave
        </h1>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-auto gap-3">
          {/* card 1 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-3 lg:row-span-2 rounded-[16px] p-6 h-[429px] relative">
            <h3 className="text-2xl font-semibold mb-4">Record</h3>
            <p>
              Effortless audio recording on iPhone, iPad, & Mac. Unlimited
              recording, background capability, one-tap start.
            </p>
            <div className="mt-24 absolute bottom-[18px] left-0 right-0 flex justify-center w-full">
              <img
                src={'/assets/images/companion.png'}
                alt="record"
                className="w-[206px] h-[142px] object-cover mb-[42px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-3 lg:row-span-2 rounded-[16px] pt-6 px-6 h-[429px] relative">
            <h3 className="text-2xl font-semibold mb-4">Transcribe</h3>
            <p>Top-notch transcription: Fast, multilingual support.</p>
            <div className="mt-24 absolute bottom-0 left-0 right-0 flex justify-center w-full">
              <img
                src={'/assets/images/transcribe.png'}
                alt="record"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-3 lg:row-span-1 w-full rounded-[16px] h-[208px] pt-6 relative">
            <div className="px-6">
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p>
                Capture calls: ID <br /> recognition, <br /> secure storage.
              </p>
            </div>
            <div className="absolute bottom-0 right-0">
              <img
                src={'/assets/images/phone.png'}
                alt="record"
                className="object-cover rounded-br-[16px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 4 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-3 lg:row-span-1 w-full rounded-[16px] h-[208px] pt-6 relative overflow-hidden">
            <div className="px-6">
              <h3 className="text-2xl font-semibold mb-4">Import</h3>
              <p>
                Import voicemails, <br /> notes: Podcast player <br />{" "}
                compatibility.
              </p>
            </div>
            <div className="absolute -rotate-[11deg] top-4 right-20">
              <img
                src={'/assets/images/podcasts.png'}
                alt="record"
                className="object-cover size-16"
                loading="lazy"
              />
            </div>
            <div className="absolute rotate-[15deg] top-4 -right-4">
              <img
                src={'/assets/images/call.png'}
                alt="record"
                className="object-cover size-16"
                loading="lazy"
              />
            </div>
            <div className="absolute -rotate-[11deg] top-24 right-0">
              <img
                src={'/assets/images/video.png'}
                alt="record"
                className="object-cover size-16"
                loading="lazy"
              />
            </div>
            <div className="absolute -rotate-[11deg] top-28 right-24">
              <img
                src={'/assets/images/meetings.png'}
                alt="record"
                className="object-cover size-16"
                loading="lazy"
              />
            </div>
            <div className="absolute -rotate-[11deg] bottom-0 right-10">
              <img
                src={'/assets/images/lecture.png'}
                alt="record"
                className="object-cover size-16"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 5 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-6 lg:row-span-1 w-full rounded-[16px] h-[208px] pt-6 relative">
            <div className="px-6">
              <h3 className="text-2xl font-semibold mb-4">Summarize</h3>
              <p>
                Summarize with highlights: <br /> Custom lengths, formats.
              </p>
            </div>
            <div className="absolute bottom-0 right-10">
              <img
                src={'/assets/images/summarize2.png'}
                alt="record"
                className="object-cover rounded-br-[16px]"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-10 right-0">
              <img
                src={'/assets/images/summarize1.png'}
                alt="record"
                className="object-cover rounded-br-[16px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 6 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-4 lg:row-span-1 rounded-[16px] pt-6 px-6 h-[259px] relative">
            <h3 className="text-2xl font-semibold mb-4">Share</h3>
            <p>
              Share audio, summary, or transcript: <br /> URL publish, PDF.
            </p>
            <div className="mt-24 absolute bottom-0 left-0 right-0 flex justify-center w-full">
              <img
                src={'/assets/images/share.png'}
                alt="record"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 7 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-4 lg:row-span-1 rounded-[16px] pt-6 px-6 h-[259px] relative">
            <h3 className="text-2xl font-semibold mb-4">Language</h3>
            <p>
              Multi-language support: <br /> Accurate transcription, <br />{" "}
              language customization.
            </p>
            <div className="mt-24 absolute bottom-0 right-0">
              <img
                src={'/assets/images/language2.png'}
                alt="record"
                className="object-cover rounded-r-[16px]"
                loading="lazy"
              />
            </div>
            <div className="mt-24 absolute bottom-0 right-12">
              <img
                src={'/assets/images/language1.png'}
                alt="record"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* card 8 */}
          <div className="bg-[#766EFF] col-span-12 lg:col-span-4 lg:row-span-1 rounded-[16px] pt-6 pl-6 h-[259px] relative">
            <h3 className="text-2xl font-semibold mb-4">Share</h3>
            <p>
              Siri shortcut <br /> compatible: <br /> iPhone 15 action <br />{" "}
              button recording.
            </p>
            <div className="absolute top-0 right-0">
              <img
                src={'/assets/images/siri.png'}
                alt="record"
                className="object-cover rounded-tr-[16px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
