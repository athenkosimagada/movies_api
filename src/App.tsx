import Header from "./containers/Header";
import "./App.css";
import Home from "./pages/Home";
import { ReactElement, useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [components, setComponents] = useState<ReactElement>();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setComponents(<>
        <Header />
        <Home />
      </>);
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="max-w-[1420px] mx-auto">
      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      )}
      {components}
    </div>
  );
}

export default App;
