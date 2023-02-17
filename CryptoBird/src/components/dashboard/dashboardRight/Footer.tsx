import Trend from "../../common/Trend";
import btcicon from "../../../assets/icons/bitcoin.svg";
import ethereum from "../../../assets/icons/ethereum.svg";
import ltecoin from "../../../assets/icons/litecoin.svg";
import dogecoin from "../../../assets/icons/doge-coin.svg";
import trendChart from "../../../assets/images/tmp.png";

const trendData = [
  {
    icon: btcicon,
    fullname: "Bitcoin",
    name: "BTC",
    prices: 178016,
    trend: 1.2,
    trendChart: trendChart,
  },
  {
    icon: ethereum,
    fullname: "Ethereum",
    name: "ETH",
    prices: 9876,
    trend: -0.5,
    trendChart: trendChart,
  },
  {
    icon: ltecoin,
    fullname: "Litecoin",
    name: "LTC",
    prices: 15688,
    trend: 0.8,
    trendChart: trendChart,
  },
  {
    icon: dogecoin,
    fullname: "Dogecoin",
    name: "DOGE",
    prices: 12333,
    trend: -0.3,
    trendChart: trendChart,
  },
];

export default function Footer() {
  return (
    <div className="mt-[2.5rem] flex flex-col">
      <div className="flex justify-between">
        <span className="font-[Aeonik-Regular] text-[1.5rem]">My assets</span>
        <select
          className="font-[Aeonik-Medium] rounded-xl bg-[#343434] text-[1rem] text-center
                        w-[6.375rem] h-[2.6875rem] appearance-none bg-no-repeat bg-down-arrow bg-right pr-2"
          onClick={(e) => console.log(e.currentTarget.value)}
          defaultValue="popular"
        >
          <option value="popular">Popular</option>
          <option value="favorite">Favorite</option>
        </select>
      </div>
      {/* 2*2 网格布局 */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-[1.5625rem]">
        {trendData.map((item) => (
          <Trend
            key={item.fullname}
            icon={item.icon}
            fullname={item.fullname}
            name={item.name}
            prices={item.prices}
            trend={item.trend}
            trendChart={item.trendChart}
          />
        ))}
      </div>
    </div>
  );
}
