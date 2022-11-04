import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/auth";
import Add from "./pages/add";
import Edit from "./pages/edit";
import { SkeletonTheme } from "react-loading-skeleton";
const LazyProducts = React.lazy(() => import("./pages/products"));

const App = () => {
  return (
    <>
      <SkeletonTheme baseColor="#626367" highlightColor="#444">
        <Routes>
          <Route
            path="/products"
            element={
              <React.Suspense fallback="Loading....">
                <LazyProducts />
              </React.Suspense>
            }
          />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
};

export default App;
