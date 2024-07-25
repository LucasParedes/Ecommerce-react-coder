import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Cart } from "./pages/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { CheckoutContainer } from "./pages/checkout/CheckoutContainer";
import { CartContext } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart/checkout" element={<CheckoutContainer />} />
          <Route
            path="*"
            element={<h1 className="not-found"> 404 Not found</h1>}
          />
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
