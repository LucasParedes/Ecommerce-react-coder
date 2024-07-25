import { useContext, useState } from "react";
import { CartContexts } from "../../context/CartContext";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContexts);

  const navigate = useNavigate();

  let total = getTotalPrice();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const sendForm = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total,
    };

    let ordersColecction = collection(db, "orders");
    addDoc(ordersColecction, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Su compra se realizó con exito, su ticket es ${res.id}`);
      })
      .finally(() => {
        clearCart();
        navigate("/");
      });
    //actualizamos el stock del producto comprado
    let productCollection = collection(db, "products");
    cart.forEach((elem) => {
      let refDoc = doc(productCollection, elem.id);
      updateDoc(refDoc, { stock: elem.stock - elem.quantity });
    });
  };

  return (
    <Checkout
      orderId={orderId}
      sendForm={sendForm}
      handleChange={handleChange}
    />
  );
};
