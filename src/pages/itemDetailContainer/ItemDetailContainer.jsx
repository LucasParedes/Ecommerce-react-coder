import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContexts } from "../../context/CartContext.jsx";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ItemDetail } from "./itemDetail.jsx";

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

  return <ItemDetail item={item} initial={initial} addCart={addCart} />;
};
