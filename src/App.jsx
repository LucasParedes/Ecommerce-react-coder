import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Cart } from "./pages/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
      </Routes>
      {/*       <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
