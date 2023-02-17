import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";

export default function DashboardRight() {
  return (
    <aside className="flex flex-col bg-[#1A1A1A] w-[38rem] px-16 pt-8 text-white">
      <Header />
      <Middle />
      <Footer />
    </aside>
  );
}
