import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import '../scss/index.scss';
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
