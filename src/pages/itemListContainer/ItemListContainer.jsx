import { useState, useEffect } from "react";
import { neumatics } from "../../products/neumatics.js";
import { ProductCard } from "../../components/productCard/ProductCard.jsx";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { categoria } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      let x = true;
      const filter = neumatics.filter((neumatic) =>
        neumatic.categoria.includes(categoria)
      );
      if (x) {
        resolve(categoria ? filter : neumatics);
      } else {
        reject({ message: "error" });
      }
    });

    getProduct
      .then((res) => {
        setItems(res);
      })
      .catch((e) => {
        setError(e);
      });
  }, [categoria]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        padding: "13px",
        marginTop: "110px", // Ajusta este valor según la altura de tu NavBar
      }}
    >
      {items.map((neumatico) => (
        <ProductCard
          key={neumatico.id}
          marca={neumatico.marca}
          modelo={neumatico.modelo}
          img={neumatico.imagen}
          precio={neumatico.precio}
          id={neumatico.id}
        />
      ))}
    </div>
  );
};
