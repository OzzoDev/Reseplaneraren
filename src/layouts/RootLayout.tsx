import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import PageTransition from "./PageTransition";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="grow flex flex-col justify-center h-full bg-gradient-to-b from-slate-500 to-sky-800 text-white overflow-hidden pt-[65px]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
