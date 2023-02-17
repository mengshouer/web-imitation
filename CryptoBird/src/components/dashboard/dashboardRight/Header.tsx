import searchIcon from "../../../assets/icons/search.svg";
import emailIcon from "../../../assets/icons/email.svg";
import notificationIconActive from "../../../assets/icons/notification-active.svg";
import avatar from "../../../assets/images/avatar.png";

export default function Header() {
  return (
    <div className="flex items-center">
      {/* search input */}
      <div className="flex items-center bg-[#101010] w-[19.4375rem] h-[3.25rem] hover:cursor-pointer rounded-xl">
        <img src={searchIcon} alt="search" className="w-6 h-6 ml-4 mr-2" />
        <input
          type="text"
          className="text-white placeholder-opacity-50 bg-[#101010] outline-none hover:cursor-pointer font-[Aeonik-Regular]"
          placeholder="Search"
        />
      </div>
      {/* email and notification icons */}
      <div className="flex items-center ml-4">
        <img
          src={emailIcon}
          alt="email"
          className="w-6 h-6 mr-6 hover:cursor-pointer"
        />
        <img
          src={notificationIconActive}
          alt="notification"
          className="w-[1.5625rem] h-[1.4375rem] hover:cursor-pointer"
        />
      </div>
      {/* avatar */}
      <img
        src={avatar}
        alt="avatar"
        className="ml-10 w-[2.5rem] h-[2.5rem] rounded-full bg-[#101010] hover:cursor-pointer"
      />
    </div>
  );
}
