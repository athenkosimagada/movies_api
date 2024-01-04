import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import "../scss/index.scss";
import Banner from "../containers/Banner";
import { ToggleProvider } from "../utils/ToggleProvider ";

function Layout() {
  return (
    <ToggleProvider>
      <div className="layout">
        <Navbar />
        <Outlet />
        <Banner />
        <Footer />
      </div>
    </ToggleProvider>
  );
}

export default Layout;
