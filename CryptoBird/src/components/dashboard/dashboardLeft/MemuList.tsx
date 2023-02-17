import dashboard from "../../../assets/icons/dashboard.svg";
import wallet from "../../../assets/icons/wallet.svg";
import trade from "../../../assets/icons/trade.svg";
import market from "../../../assets/icons/market.svg";
import notification from "../../../assets/icons/notification.svg";
import settings from "../../../assets/icons/settings.svg";

const menuList = [
  {
    name: "Dashboard",
    icon: dashboard,
  },
  {
    name: "Wallet",
    icon: wallet,
  },
  {
    name: "Trade",
    icon: trade,
  },
  {
    name: "Market",
    icon: market,
  },
  {
    name: "Notification",
    icon: notification,
  },
  {
    name: "Settings",
    icon: settings,
  },
];

export default function MemuList() {
  return (
    <>
      {menuList.map((item, index) => (
        <div
          key={item.name}
          className={`flex items-center mt-8 cursor-pointer`}
        >
          <img src={item.icon} alt={item.name} />
          <span
            className={`ml-6 hover:text-white text-[1.125rem] font-[Aeonik-Medium]
          ${index === 0 ? "text-white" : "text-[#747474]"}`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
}
