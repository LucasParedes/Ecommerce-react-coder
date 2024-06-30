import "./cartWidget.css";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
};
