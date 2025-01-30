import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import PageTransition from "./PageTransition";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="grow flex flex-col justify-center h-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-b from-slate-500 to-sky-800 overflow-hidden">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
