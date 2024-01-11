import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = lazy(() => wait(2000).then(() => import("./pages/Layout")));
const Home = lazy(() => wait(2000).then(() => import("./pages/Home")));
const MoviesShows = lazy(() => wait(2000).then(() => import("./pages/MoviesShows")));
const Subscriptions = lazy(() => wait(2000).then(() => import("./pages/Subscriptions")));
const Support = lazy(() => wait(2000).then(() => import("./pages/Support")));
const NoPage = lazy(() => wait(2000).then(() => import("./pages/NoPage")));
const Details = lazy(() => wait(2000).then(() => import("./pages/Details")));


function App() {
  return (
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
  );
}

function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}
export default App;
