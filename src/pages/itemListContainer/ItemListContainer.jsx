import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList.jsx";

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

  return <ItemList items={items} />;
};
