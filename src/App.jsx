import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoPage from "./pages/noPage/NoPage";
import HomePage from "./pages/home/HomePage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";

function App() {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/infoproducto" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/todolosproductos" element={<AllProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App