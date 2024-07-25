import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { CounterContainer } from "../../components/counter/CounterContainer.jsx";
import { ProductCard } from "../../components/productCard/ProductCard.jsx";
import "./itemDetail.css";

export const ItemDetail = ({ item, initial, addCart }) => {
  return (
    <div className="page">
      <Card
        sx={{
          width: 300,
          backgroundColor: "#832a7a0f",
          borderRadius: "20px",
          border: "2px solid #cfa4a4",
        }}
      >
        <ProductCard
          marca={item.marca}
          modelo={item.modelo}
          img={item.imagen}
          tamaño={item.tamaño}
        />
        {item.stock >= 1 ? (
          <>
            <CounterContainer
              stock={item.stock}
              initial={initial}
              onAdd={addCart}
            />
            <CardActions
              sx={{
                justifyContent: "center",
                border: "1px solid #cfa4a4",
                borderRadius: "30px",
              }}
            >
              <Typography variant="body2">
                Stock Disponible: {item.stock}
              </Typography>
            </CardActions>
          </>
        ) : (
          <p className="not-stock">SIN STOCK</p>
        )}
      </Card>
    </div>
  );
};
