import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a neumáticos Rulo" />
      <Footer />
    </div>
  );
}

export default App;
