import Header from "./Header";
import MemuList from "./MemuList";
import logout from "../../../assets/icons/logout.svg";

export default function DashboardLeft() {
  return (
    <aside className="flex justify-between flex-col bg-[#1A1A1A] min-w-[16.5rem] w-264/1920 pl-8">
      <Header />
      <main className="flex flex-col h-full">
        <MemuList />
      </main>
      <footer className="flex items-center mt-8 mb-10 cursor-pointer">
        <img src={logout} alt="logout" />
        <span className="ml-6 hover:text-white text-[#747474] text-[1.125rem] font-[Aeonik-Medium]">
          Log out
        </span>
      </footer>
    </aside>
  );
}
