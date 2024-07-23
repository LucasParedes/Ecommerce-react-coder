import { createContext, useState } from "react";

export const CartContexts = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let product = cart.some((p) => p.id === id);
    return product;
  };

  const addRemoveQuantity = (productId, newQuantity) => {
    let stock = getStockForProduct(productId);

    if (newQuantity === 0) {
      // Elimina el producto del carrito si la cantidad es 0
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId)
      );
    } else {
      // Actualiza la cantidad del producto existente o agrega un nuevo producto al carrito
      let exist = isInCart(productId);
      let maxQuantity = Math.min(newQuantity, stock);

      if (exist) {
        let newArray = cart.map((elemento) =>
          elemento.id === productId
            ? { ...elemento, quantity: maxQuantity }
            : elemento
        );
        setCart(newArray);
      } else {
        let maxQuantity = Math.min(newQuantity, stock);
        // Si el producto no existe en el carrito, agrega con la cantidad especificada
        let product = {
          id: productId,
          quantity: maxQuantity,
        };
        setCart([...cart, product]);
      }
    }
  };

  const addToCart = (products) => {
    let exist = isInCart(products.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === products.id) {
          return {
            ...elemento,
            quantity: elemento.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, products]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const getQuantityById = (id) => {
    let producto = cart.find((product) => product.id === id);
    return producto?.quantity;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + elem.precio * elem.quantity;
    }, 0);
    let formatNumber =
      "$" + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formatNumber;
  };

  const getTotalForProduct = (productId) => {
    // Encuentra el producto en el carrito usando el productId
    const product = cart.find((item) => item.id === productId);

    if (product) {
      // Calcula el total del producto específico
      let total = product.precio * product.quantity;
      let formatNumber =
        "$" + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return formatNumber;
    }

    // Si el producto no está en el carrito, devuelve un total de $0
    return "$0";
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + elem.quantity;
    }, 0);
    return total;
  };

  const getStockForProduct = (productId) => {
    const product = cart.find((p) => p.id === productId);
    return product ? product.stock : 0;
  };
  let metodos = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
    addRemoveQuantity,
    getTotalForProduct,
    getStockForProduct,
  };

  return (
    <CartContexts.Provider value={metodos}>{children}</CartContexts.Provider>
  );
};
