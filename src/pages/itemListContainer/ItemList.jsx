import { ProductCard } from "../../components/productCard/ProductCard.jsx";
import { Link } from "react-router-dom";
import { Button, CardActions } from "@mui/material";
import "./itemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="page">
      {items.map((neumatico) => (
        <div className="target" key={neumatico.id}>
          <ProductCard
            marca={neumatico.marca}
            modelo={neumatico.modelo}
            img={neumatico.imagen}
            tamaño={neumatico.tamaño}
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
