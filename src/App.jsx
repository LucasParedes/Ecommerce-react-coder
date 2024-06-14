import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <ItemListContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
