import btcicon from "../../../assets/icons/bitcoin.svg";
import trans from "../../../assets/icons/trans.svg";
import usdticon from "../../../assets/icons/usdt.svg";

export default function Middle() {
  return (
    <div className="flex flex-col mt-[4.125rem]">
      {/* Convert */}
      <span className="font-[Aeonik-Regular] text-[1.5rem]">Convert</span>
      <div className="flex flex-col justify-center bg-[#121212] mt-6 p-10 rounded-xl w-[30rem] h-[21.875rem]">
        {/* First column */}
        <div className="flex flex-col items-center">
          <div className="flex items-center rounded-xl bg-[#2A2A2A] w-full h-16 pl-4 pr-2">
            <input
              className="w-full text-white bg-transparent outline-none"
              defaultValue={0.00062}
              type="number"
              placeholder="0.00"
            />
            <img
              src={btcicon}
              alt="btc"
              className="w-6 h-6 transform  translate-x-8"
            />
            <select
              className="font-[Aeonik-Medium] rounded-xl bg-[#343434] text-[1rem] text-center
                        w-[10.625rem] h-12 appearance-none bg-no-repeat bg-down-arrow bg-right pr-2"
              onClick={(e) => console.log(e.currentTarget.value)}
              defaultValue="BTC"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="XMR">XMR</option>
            </select>
          </div>
        </div>
        {/* Dividing line */}
        <div className="flex justify-between items-center my-4">
          <span className="w-full p-[0.0625rem] bg-[#343434]" />
          <img src={trans} alt="trans" className="w-8 h-8 mx-[1.125rem]" />
          <span className="w-full p-[0.0625rem] bg-[#343434]" />
        </div>
        {/* Second column */}
        <div className="flex flex-col items-center">
          <div className="flex items-center rounded-xl bg-[#2A2A2A] w-[100%] h-16 pl-4 pr-2">
            <input
              className="w-full text-white bg-transparent outline-none"
              type="number"
              defaultValue={10.42}
              placeholder="0.00"
            />
            <img
              src={usdticon}
              alt="btc"
              className="w-6 h-6 transform  translate-x-8"
            />
            <select
              className="font-[Aeonik-Medium] rounded-xl bg-[#343434] text-[1rem] text-center
                        w-[10.625rem] h-12 appearance-none bg-no-repeat bg-down-arrow bg-right pr-2"
              onClick={(e) => console.log(e.currentTarget.value)}
              defaultValue="USDT"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>
        {/* Exchange */}
        <div className="flex justify-between items-center mt-6">
          <span className="font-[Aeonik-Regular] text-[1rem] text-[#747474]">
            Transaction fee: 0.20$
          </span>
          <button className="font-[Aeonik-Medium] text-[1.125rem] text-white bg-[#1459F5] rounded-xl w-40 h-12">
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}
