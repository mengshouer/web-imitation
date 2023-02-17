import Header from "./Header";
import Footer from "./Footer";

export default function DashboardMiddle() {
  return (
    <main className="flex flex-col bg-black w-full min-w-[65.5rem] min-h-full">
      <Header />
      <Footer />
    </main>
  );
}
