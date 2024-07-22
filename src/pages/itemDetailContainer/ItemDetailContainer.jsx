import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Counter } from "../../components/counter/Counter.jsx";
import { CartContexts } from "../../context/CartContext.jsx";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ProductCard } from "../../components/productCard/ProductCard.jsx";
import "./itemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContexts);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true); // Estado de carga

  let initial = getQuantityById(id);

  useEffect(() => {
    let productCollections = collection(db, "products");
    let refDoc = doc(productCollections, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ ...res.data(), id: res.id });
      setLoading(false); // Producto cargado
    });
  }, [id]);

  const addCart = (quantity) => {
    let object = { ...item, quantity: quantity };
    addToCart(object);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="page">
      <Card
        sx={{
          width: 300,
          backgroundColor: "#832a7a0f",
          borderRadius: "20px",
          border: "2px solid #cfa4a4",
        }}
      >
        <ProductCard
          marca={item.marca}
          modelo={item.modelo}
          img={item.imagen}
        />
        {item.stock >= 1 ? (
          <>
            <Counter stock={item.stock} initial={initial} onAdd={addCart} />
            <CardActions
              sx={{
                justifyContent: "center",
                border: "1px solid #cfa4a4",
                borderRadius: "30px",
              }}
            >
              <Typography variant="body2">
                Stock Disponible: {item.stock}
              </Typography>
            </CardActions>
          </>
        ) : (
          <p className="not-stock">SIN STOCK</p>
        )}
      </Card>
    </div>
  );
};
