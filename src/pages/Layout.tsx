import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import "../scss/index.scss";
import Banner from "../containers/Banner";
import { ToggleProvider } from "../utils/ToggleProvider ";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Layout() {
  return (
    <ToggleProvider>
      <div className="layout">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
        <Banner />
        <Footer />
      </div>
    </ToggleProvider>
  );
}

export default Layout;
