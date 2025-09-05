import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Outline() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header stays fixed */}
      <Header />

      {/* Main content injected here */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer stays fixed */}
      <Footer />
    </div>
  );
}
