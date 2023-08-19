import Navbar from "./scenes/Navbar";
import HomePage from "./scenes/HomePage";
import Footer from "./scenes/Footer";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./scenes/CartPage";
import InformationPage from "./scenes/InformationPage";
import ShippingPage from "./scenes/ShippingPage";
import PaymentPage from "./scenes/PaymentPage";
import NewInPage from "./scenes/NewInPage";
import Bestsellers from "./scenes/Bestsellers";
import Weekend from "./scenes/Weekend";
import Terrus from "./scenes/Terrus";
import All from "./scenes/All";
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
            <Route exact path="/checkout/shipping" element={<ShippingPage />} />
            <Route exact path="/checkout/payment" element={<PaymentPage />} />
            <Route exact path="/products/new" element={<NewInPage />} />
            <Route exact path="/products/bestsellers" element={<Bestsellers />} />
            <Route exact path="/products/weekend" element={<Weekend />} />
            <Route exact path="/products/terrus" element={<Terrus />} />
            <Route exact path="/products/all" element={<All />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
