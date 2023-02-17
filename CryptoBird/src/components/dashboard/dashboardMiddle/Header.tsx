import up from "../../../assets/icons/up.svg";
import down from "../../../assets/icons/down.svg";
import add from "../../../assets/icons/add.svg";
import withdraw from "../../../assets/icons/withdraw.svg";
import convert from "../../../assets/icons/convert.svg";

function Trending({
  area,
  value,
  trending,
  border,
}: {
  area: string;
  value: string;
  trending: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex flex-col px-8 ${
        border === true && "border-x-2 border-[#333333]"
      }`}
    >
      <span className="text-[#747474] font-[Aeonik-Medium] text-[1.0625rem]">
        {area}
      </span>
      <div className="flex items-center justify-center h-7 pt-1">
        <span className="text-white font-[Aeonik-Regular] text-[1.125rem]">
          {value}
        </span>
        <span className="p-2">
          <img
            src={trending === "up" ? up : down}
            alt={trending === "up" ? "up" : "down"}
            className="w-[0.75rem] h-[0.75rem]"
          />
        </span>
      </div>
    </div>
  );
}

function Button({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col justify-center items-center mx-6 min-w-16 min-h-[4.4875rem] hover:cursor-pointer">
      <img src={icon} alt={title} className="w-12 h-12" />
      <span className="text-white font-[Aeonik-Regular] text-[0.875rem] mt-[0.625rem]">
        {title}
      </span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex flex-col pl-16 min-h-[33.1875rem]">
      {/* 头部 */}
      <div className="flex justify-between mt-9">
        <span className="text-white font-[Aeonik-Medium] text-[2.5rem]">
          Dashboard
        </span>
        <button
          className="bg-[#1A1A1A] text-white text-[1.125rem] font-[Aeonik-Medium]
                            rounded-[0.625rem] px-8 py-3 mr-16 flex items-center"
        >
          <span className="mr-2">Manage</span>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 12L6.25 6.5L0.75 1"
              stroke="#747474"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      {/* 中部-钱包余额总数 */}
      <div className="flex justify-between mt-[4.625rem]">
        <div className="flex flex-col">
          <span className="text-white font-[Aeonik-Regular] text-2xl">
            Total Balance
          </span>
          <div className="flex">
            <span className="text-white font-[Aeonik-Regular] text-s5xl mt-2">
              $62,340.48
            </span>
            <span
              className="flex items-center justify-center ml-5 mt-10 border rounded-3xl border-[#2EBE7B]
                          h-[1.875rem] w-[4.375] text-[#2EBE7B] font-[Aeonik-Regular]"
            >
              +1,2%&nbsp;
              <img src={up} alt="up" className="w-2 h-2" />
            </span>
          </div>
        </div>
      </div>
      {/* 底部 */}
      <div className="flex items-center justify-between mt-[7.375rem]">
        {/* 左侧趋势 Today 7Days 30Days */}
        <div className="flex transform -translate-x-8 h-[3.625rem]">
          <Trending area="Today" value="+1,2%" trending="up" />
          <Trending area="7 Days" value="+4,3%" trending="up" border={true} />
          <Trending area="30 Days" value="-11,8%" trending="down" />
        </div>
        {/* 右侧按钮 */}
        <div className="flex mr-16">
          <Button icon={add} title="Add" />
          <Button icon={withdraw} title="Withdraw" />
          <Button icon={convert} title="Convert" />
        </div>
      </div>
    </header>
  );
}
