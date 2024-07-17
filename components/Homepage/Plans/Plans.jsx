import { EliteCard, EssentialsCard, ExplorerCard } from "./PlansCard";

const Plans = () => {
  return (
    <div className="bg-[#FFFDE4] py-24">
      <div>
        <div>
          <h1 className="text-5xl lg:text-6xl font-semibold text-black text-center font-primary whitespace-nowrap">
            Start for free
          </h1>
          <p className="text-2xl text-center text-black mt-4">
            Upgrade as you need it.
          </p>
        </div>

        {/* cards */}
        <div className="max-w-[1380px] w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
          <ExplorerCard />
          <EssentialsCard />
          <EliteCard />
        </div>
      </div>
    </div>
  );
};

export default Plans;
