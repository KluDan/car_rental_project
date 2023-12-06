import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const CarCatalog = lazy(() => import("./pages/CarCatalog"));
const SavedCars = lazy(() => import("./pages/SavedCars"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/catalog" element={<CarCatalog />} />
        <Route path="/favorites" element={<SavedCars />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
