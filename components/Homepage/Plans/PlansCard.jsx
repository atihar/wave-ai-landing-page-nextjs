import { images } from "@/public/assets";

const explorerFeatures = [
  "30 minutes of monthly recording time",
  "Record audio or phone calls",
  "Background Recording in iOS",
  "Best-in-class Transcription and Summary",
];

const essentialFeatures = [
  "5 Hours of monthly recording time",
  "Unlimited recording length",
  "Record audio or phone calls",
  "Background Recording in iOS",
  "Best-in-class Transcription and Summary",
  "Unlimited Summary Customizations",
  "Web based dashboard (coming soon)",
  "Zapier Integration (coming soon)",
];

const eliteFeatures = [
  "Unlimited recording time",
  "Unlimited recording length",
  "Record audio or phone calls",
  "Background Recording in iOS",
  "Best-in-class Transcription and Summary",
  "Unlimited Summary Customizations",
  "Web based dashboard (coming soon)",
  "Zapier Integration (coming soon)",
];

export const ExplorerCard = () => {
  return (
    <div className="rounded-2xl">
      <div className="bg-[#4D5EF6] p-10 rounded-t-2xl space-y-3 relative">
        <h3 className="font-primary text-[32px] font-semibold">Explorer</h3>
        <p>Discover the possibilities</p>
        <p className="pt-2">
          <span className="text-5xl font-semibold">$0</span> <span>usd</span>
        </p>
        <div className="absolute right-0 top-1/4">
          <img
            src={'/assets/images/explorer.png'}
            alt="explorer bg"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* features */}
      <div className="relative bg-white flex flex-col min-h-[600px] rounded-b-xl">
        <div className="p-10 flex-grow">
          <ul className="space-y-6">
            {explorerFeatures.map((feature, index) => (
              <li key={index} className="text-black flex items-center gap-4">
                <img
                  src={'/assets/images/checkIcon.png'}
                  alt="check icon"
                  className="size-[24px]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* button */}

        <div className="p-10 w-full">
          <button className="bg-[#4D5EF6] w-full py-4 text-center rounded-full hover:opacity-90 transition-all duration-300">
            Download Wave
          </button>
        </div>
      </div>
    </div>
  );
};

export const EssentialsCard = () => {
  return (
    <div className="rounded-2xl">
      <div className="bg-[#E3EEF1] p-10 rounded-t-2xl space-y-3 relative text-black">
        <h3 className="font-primary text-[32px] font-semibold">Explorer</h3>
        <p className="text-[#41474D]">Perfect for occasional needs</p>
        <p className="pt-2">
          <span className="text-5xl font-semibold">$9.99</span> <span>usd</span>
        </p>
        <div className="absolute right-0 top-1/4">
          <img
            src={'/assets/images/essential.png'}
            alt="explorer bg"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* features */}
      <div className="relative bg-white flex flex-col min-h-[600px] rounded-b-xl">
        <div className="p-10 flex-grow">
          <ul className="space-y-6">
            {essentialFeatures.map((feature, index) => (
              <li key={index} className="text-black flex items-center gap-4">
                <img
                  src={'/assets/images/checkIcon.png'}
                  alt="check icon"
                  className="size-[24px]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* button */}

        <div className="p-10 w-full">
          <button className="bg-[#4D5EF6] w-full py-4 text-center rounded-full hover:opacity-90 transition-all duration-300">
            Download Wave
          </button>
        </div>
      </div>
    </div>
  );
};

export const EliteCard = () => {
  return (
    <div className="rounded-2xl">
      <div className="bg-[#CB237E] p-10 rounded-t-2xl space-y-3 relative">
        <h3 className="font-primary text-[32px] font-semibold">Explorer</h3>
        <p>Perfect for occasional needs</p>
        <p className="pt-2">
          <span className="text-5xl font-semibold">$19.99</span>{" "}
          <span>usd</span>
        </p>
        <div className="absolute right-0 top-0">
          <img
            src={'/assets/images/elite.png'}
            alt="explorer bg"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* features */}
      <div className="relative bg-white flex flex-col min-h-[600px] rounded-b-xl">
        <div className="p-10 flex-grow">
          <ul className="space-y-6">
            {eliteFeatures.map((feature, index) => (
              <li key={index} className="text-black flex items-center gap-4">
                <img
                  src={'/assets/images/checkIcon.png'}
                  alt="check icon"
                  className="size-[24px]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* button */}

        <div className="p-10 w-full">
          <button className="bg-[#4D5EF6] w-full py-4 text-center rounded-full hover:opacity-90 transition-all duration-300">
            Download Wave
          </button>
        </div>
      </div>
    </div>
  );
};
