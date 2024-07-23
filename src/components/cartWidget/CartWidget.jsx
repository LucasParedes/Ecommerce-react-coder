import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContexts } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContexts);
  let totalItems = getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={totalItems} color="primary" showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
};
