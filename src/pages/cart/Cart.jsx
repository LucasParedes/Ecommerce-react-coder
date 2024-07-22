import { useContext } from "react";
import { CartContexts } from "../../context/CartContext";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const {
    cart,
    deleteProduct,
    getTotalPrice,
    clearCart,
    addRemoveQuantity,
    getTotalForProduct,
  } = useContext(CartContexts);

  let total = getTotalPrice();

  return (
    <>
      <div className="product-list">
        <h2 className="title">Carrito de compras</h2>

        {cart.length >= 1 && (
          <>
            <a href="#" onClick={clearCart}>
              🗑️ Vaciar carrito
            </a>
          </>
        )}
        {cart.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.imagen} alt={product.marca} />
            </div>
            <div className="product-info">
              <a>
                {product.marca}
                &nbsp;
                {product.modelo}
                &nbsp;
                {product.tamaño}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "40px",
              }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  addRemoveQuantity(product.id, product.quantity - 1)
                }
                className="MuiButton-textPrimary"
                sx={{
                  backgroundColor: "#1b3039",
                  width: "20px",
                  height: "20px",
                }}
              >
                -
              </Button>
              <Typography style={{ width: "40px", textAlign: "center" }}>
                {product.quantity}
              </Typography>
              <Button
                variant="contained"
                onClick={() =>
                  addRemoveQuantity(product.id, product.quantity + 1)
                }
                className="MuiButton-textPrimary"
                sx={{
                  backgroundColor: "#1b3039",
                  width: "20px",
                  height: "20px",
                }}
              >
                +
              </Button>
            </div>
            <div className="product-price">
              <span>{getTotalForProduct(product.id)}</span>
            </div>
            <div className="product-trash">
              <button
                className="trash-btn"
                onClick={() => deleteProduct(product.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}

        {cart.length >= 1 ? (
          <div className="product-card">
            <div className="pago"> Pago </div>
            <div className="total-price">Total: {total}</div>
            <Link to="checkout">
              <Button
                variant="contained"
                className="MuiButton-textPrimary"
                sx={{
                  backgroundColor: "#1b3039",
                  width: "auto",
                  height: "auto",
                  fontSize: "13px",
                }}
              >
                Finalizar Compra
              </Button>
            </Link>
          </div>
        ) : (
          <div> No hay elementos en el carrito </div>
        )}
      </div>
    </>
  );
};
