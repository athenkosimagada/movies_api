import { lazy } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const MoviesShows = lazy(() =>
  import("./pages/MoviesShows"))
;
const Subscriptions = lazy(() =>
  import("./pages/Subscriptions"))
;
const Support = lazy(() => import("./pages/Support"));
const NoPage = lazy(() => import("./pages/NoPage"));
const Details = lazy(() => import("./pages/Details"));

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies&shows" element={<MoviesShows />} />
            <Route path="/:category/:id" element={<Details />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
