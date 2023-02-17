import logo from "../../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center mt-10 mb-20 hover:cursor-pointer">
      <img src={logo} alt="logo" />
      <span className="text-white text-[1.375rem] ml-7 font-[Aeonik-Medium]">
        CryptoBird
      </span>
    </header>
  );
}
