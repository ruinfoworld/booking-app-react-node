import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelDetail from "./pages/hotelDetail/HotelDetail";
import Hotels from "./pages/hotels/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
