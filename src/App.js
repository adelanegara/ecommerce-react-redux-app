import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShopLandingPage from "./Components/ShopLandingPage/loadable";
import HomePage from "./Components/HomePage/loadable";
import ViewProduct from "./Components/ViewProducts/loadable";
import AboutUsPage from "./Components/AboutUsPage/loadable";
import CartList from "./Components/CartList/loadble";

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
