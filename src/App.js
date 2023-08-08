import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Pricing from "./Components/Pricing/pricing";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
