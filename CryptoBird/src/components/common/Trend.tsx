import up from "../../assets/icons/up.svg";
import down from "../../assets/icons/down.svg";
import RecentTrendChart from "./RecentTrend";

interface ITrandProps {
  icon: string;
  fullname: string;
  name: string;
  prices: number;
  trend: number;
  trendChart: string;
}

export default function Trend(props: ITrandProps) {
  const color =
    props.trend >= 0
      ? "text-[#2EBE7B] bg-[#2EBE7B]"
      : "text-[#DA5C54] bg-[#DA5C54]";

  return (
    <div className="flex flex-col w-[14.25rem] h-[13.625rem] bg-[#121212] p-6 rounded-2xl">
      <div className="flex">
        <img src={props.icon} alt="" className="w-12 h-12" />
        <div className="flex flex-col ml-6">
          <span className="font-[Aeonik-Regular] text-[1.5rem]">
            {props.fullname}
          </span>
          <span className="font-[Aeonik-Medium] text-[1rem]">{props.name}</span>
        </div>
      </div>
      <RecentTrendChart
        days={8}
        showx={false}
        showy={false}
        chartcss="w-[11.25rem] h-[3.75rem]"
      />
      <div className="flex justify-between items-center">
        <span className="font-[Aeonik-Regular] text-[1.125rem]">
          ${props.prices.toFixed(2)}
        </span>
        <span
          className={`flex items-center justify-center border-none ${color}
                  h-[1.875rem] w-[4.5625] font-[Aeonik-Regular] rounded-3xl bg-opacity-30
                }`}
        >
          {props.trend >= 0
            ? `+${props.trend.toFixed(1)}%`
            : `${props.trend.toFixed(1)}%`}
          &nbsp;
          <img
            src={props.trend >= 0 ? up : down}
            alt="trend"
            className="w-2 h-2"
          />
        </span>
      </div>
    </div>
  );
}
