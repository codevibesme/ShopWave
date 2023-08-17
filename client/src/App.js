import Navbar from "./scenes/Navbar";
import HomePage from "./scenes/HomePage";
import Footer from "./scenes/Footer";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./scenes/CartPage";
import InformationPage from "./scenes/InformationPage";
function App() {
  return (
    <div className="h-full min-w-full">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element = {<HomePage />} />
            <Route exact path="/login" element = {<LoginPage />} />
            <Route exact path="/register" element = {<RegisterPage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/checkout/information" element={<InformationPage />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
