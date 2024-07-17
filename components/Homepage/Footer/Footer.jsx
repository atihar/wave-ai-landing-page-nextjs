import { images } from "@/public/assets";

const Footer = () => {
  return (
    <div className="bg-secondary overflow-hidden">
      <div className="relative">
        {/* contents */}
        <div className="max-w-[1380px] w-full mx-auto px-4 pt-28 pb-32 lg:pt-[210px] lg:pb-[200px] relative z-10">
          <div>
            <h1 className="font-primary text-[60px] font-semibold max-w-[520px] mb-5">
              Set down your pencils; the reign of AI has begun.
            </h1>
            <div>
              <button className="bg-white px-16 py-4 rounded-full text-[#1020AE] font-semibold hover:bg-[#1020AE] hover:text-white hover:scale-x-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                Download Wave
              </button>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="absolute -right-[380px] bottom-0 lg:right-0 lg:top-0 z-0">
          <img src={'/assets/images/footerShape.png'} alt="shape" loading="lazy" />
        </div>
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <img src={'/assets/images/footerPhone.png'} alt="phone" loading="lazy" />
        </div>

        {/* black li ne */}
        <div className="flex justify-center">
          <div className="w-[140px] h-[5px] bg-black mb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
