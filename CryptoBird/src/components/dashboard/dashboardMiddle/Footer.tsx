import { useState } from "react";
import TrendChart from "../../common/TrendChart";

function DaysButton({
  days,
  setDays,
  addStyle,
}: {
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  addStyle: boolean;
}) {
  const name = days === 8 ? "Daily" : days === 111 ? "Monthly" : "Yearly";
  return (
    <div className="flex h-[2.6875rem] text-center">
      <button
        onClick={() => setDays(days)}
        className={`font-[Aeonik-Medium] text-[1rem] h-[2.1875rem] w-[5.6875rem]
                      ${addStyle && "bg-[#343434] rounded-full text-white"}`}
      >
        {name}
      </button>
    </div>
  );
}

export default function Footer() {
  const [days, setDays] = useState(366);

  return (
    <footer className="flex flex-col mt-14 px-16 h-full border-t border-[#747474] text-white">
      {/* 标题 */}
      <span className="font-[Aeonik-Regular] text-[1.5rem] mt-[5.125rem] mb-[4.5rem]">
        Trend Overview
      </span>
      {/* 表格头部 */}
      <div className="flex justify-between mb-[4.5rem]">
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full">
            <select
              className="font-[Aeonik-Medium] rounded-xl bg-[#343434] text-[1rem] text-center
                        w-[5.0625rem] h-[2.6875rem] appearance-none bg-no-repeat bg-down-arrow bg-right pr-2"
              onClick={(e) => console.log(e.currentTarget.value)}
              defaultValue="BTC"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="XMR">XMR</option>
            </select>
            <div className="flex h-[2.6875rem] text-[#747474]">
              <DaysButton days={8} setDays={setDays} addStyle={days === 8} />
              <DaysButton
                days={111}
                setDays={setDays}
                addStyle={days === 111}
              />
              <DaysButton
                days={366}
                setDays={setDays}
                addStyle={days === 366}
              />
            </div>
          </div>
          <TrendChart days={days} chartcss="w-[57.5rem] h-[18.5625rem]" />
        </div>
      </div>
    </footer>
  );
}
