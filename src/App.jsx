import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/Home"));
const CarCatalog = lazy(() => import("./pages/CarCatalog"));
const SavedCars = lazy(() => import("./pages/SavedCars"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/catalog"
          element={
            <Layout>
              <CarCatalog />
            </Layout>
          }
        />
        <Route
          path="/favorites"
          element={
            <Layout>
              <SavedCars />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
