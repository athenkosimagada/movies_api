import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../containers/Footer";
import "../scss/index.scss";
import Banner from "../containers/Banner";
import SpinnerLoader from "../constants/SpinnerLoader";

export const LoadingContext = createContext({ loading: true, error: "" });

function Layout() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { loading: contextLoading, error: contextError } =
    useContext(LoadingContext);

  useEffect(() => {
    setError(contextError);
    setLoading(contextLoading);
  }, [contextLoading, contextError]);

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
    <LoadingContext.Provider value={{ loading, error }}>
      <div className="layout">
        {loading ? (
          <SpinnerLoader />
        ) : (
          <>
            {error == null ? (
              <p>{error}</p>
            ) : (
              <>
                <Navbar />
                <Outlet />
                <Banner />
                <Footer />
              </>
            )}
          </>
        )}
      </div>
    </LoadingContext.Provider>
  );
}

export default Layout;
