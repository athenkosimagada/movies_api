import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import '../scss/index.scss';
import Banner from "../containers/Banner";
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Banner />
      <Footer />
    </div>
  );
}

export default Layout;
