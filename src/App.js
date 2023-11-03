import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/footer/Footer";
import MetaData from "./Components/Meta/MetaData";
import Shop from "./Components/Shop/Shop";
import Home from "./Home";
import SingleProduct from "./Components/Products/SingleProduct";
import { useState } from "react";
import CartProduct from "./Components/Cart/CartProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./Components/Checkout/Checkout";
import Success from "./Components/Success/Success";
import Conatct from "./Components/Contact/Conatct";
import AboutUsPage from "./Components/About/About";
import DeveloperPage from "./Components/Developers/Dev";
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
    console.log("Count increased");
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  

  return (
    <BrowserRouter>
      <MetaData title="Home-Page" />
      <Header
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        count={count}
      />{" "}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/Cart" element={<CartProduct />} />

        <Route
          path="/product/:id"
          element={
            <SingleProduct
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          }
        />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Success" element={<Success />} />
                <Route path="/Contact" element={<Conatct />} />
                <Route path="/About" element={<AboutUsPage />} />
                <Route path="/Dev" element={<DeveloperPage />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
