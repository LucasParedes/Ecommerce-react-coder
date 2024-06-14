import { useState } from "react";
import { neumatics } from "../../products/neumatics.js";
import { useEffect } from "react";
import { ProductCard } from "../../components/productCard/ProductCard.jsx";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    //Promise --> resultado que da un fetch
    const getProduct = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(neumatics);
      } else {
        reject({ message: "error" });
      }
    });

    //manejar la promsea
    getProduct
      .then((res) => {
        setItems(res);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        padding: "13px",
      }}
    >
      {items.map((neumatico, index) => (
        <ProductCard
          key={index}
          marca={neumatico.marca}
          modelo={neumatico.modelo}
          img={neumatico.imagen}
          precio={neumatico.precio}
        />
      ))}
    </div>
  );
};
