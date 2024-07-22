import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ProductCard } from "../../components/productCard/ProductCard.jsx";
import { Link, useParams } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    // solicitar a una bd
    let collections = collection(db, "products"); //traemos la collection especifica
    let consulta = collections;

    if (categoria) {
      consulta = query(collections, where("categoria", "==", categoria));
    }

    let getProducts = getDocs(consulta); // todos los productos de esa colecctino
    getProducts.then((res) => {
      let array = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setItems(array);
    });
  }, [categoria]);

  //agregar todo un array de objetos a la DB
  /* const addProducts = () => {
    let productCollection = collection(db, "products");
    neumatics.forEach((elemento) => {
      addDoc(productCollection, elemento);
    });
  }; */

  return (
    <div className="page">
      {items.map((neumatico) => (
        <div className="target" key={neumatico.id}>
          <ProductCard
            marca={neumatico.marca}
            modelo={neumatico.modelo}
            img={neumatico.imagen}
            precio={neumatico.precio}
          />
          <CardActions
            sx={{
              justifyContent: "center",
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              borderRadius: "20px",
            }}
          >
            <Link to={`/itemDetail/${neumatico.id}`}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1b3039",
                  color: "white",
                }}
              >
                Ver Mas
              </Button>
            </Link>
          </CardActions>
        </div>
      ))}
    </div>
  );
};
