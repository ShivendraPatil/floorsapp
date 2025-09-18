import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FloorsPage from "./pages/FloorsPage";
import FloorDetailsPage from "./pages/FloorDetailsPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/floors" element={<FloorsPage />} />
        <Route path="/floors/:floorId" element={<FloorDetailsPage />} />
        <Route path="/floors/:floorId/shops/:shopId" element={<ShopDetailsPage />} />
        <Route path="/floors/:floorId/services/:serviceId" element={<ServiceDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
