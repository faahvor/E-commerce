import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sports from "./pages/Sports";
import Clothes from "./pages/Clothes";
import Gadgets from "./pages/Gadgets";
import Furniture from "./pages/Furniture";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sports />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/furniture" element={<Furniture />} />
      </Routes>
    </>
  );
}

export default App;
