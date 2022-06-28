import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShopLandingPage from "./Components/ShopLandingPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/" element={<ShopLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;