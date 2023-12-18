import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import "../scss/index.scss";
import Banner from "../containers/Banner";
import SpinnerLoader from "../constants/SpinnerLoader";

export const LoadingContext = createContext(true);

function Layout() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={loading}>
      <div className="layout">
        {loading ? <SpinnerLoader /> : (
          <>
            <Navbar />
            <Outlet />
            <Banner />
            <Footer />
          </>
        )}
      </div>
    </LoadingContext.Provider>
  );
}

export default Layout;