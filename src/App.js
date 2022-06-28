import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShopLandingPage from "./Components/ShopLandingPage";
import HomePage from "./Components/HomePage";
import ViewProduct from "./Components/ViewProducts";
import AboutUsPage from "./Components/AboutUsPage";
import CartList from "./Components/CartList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/shop" element={<ShopLandingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/view/:id" element={<ViewProduct />} />
        <Route path="/cartlist" element={<CartList />} />
      </Routes>
    </Router>
  );
}

export default App;