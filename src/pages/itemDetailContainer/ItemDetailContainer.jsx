import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { neumatics } from "../../products/neumatics.js";
import { Counter } from "../../components/counter/Counter.jsx";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    let product = neumatics.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

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
      <Card
        sx={{
          width: 300,
          backgroundColor: "#832a7a0f",
          borderRadius: "20px",
          border: "2px solid #cfa4a4",
        }}
      >
        <CardMedia
          component="img"
          alt={item.marca}
          height="300"
          image={item.imagen}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item.marca}
          </Typography>
          <Typography variant="body2">{item.modelo}</Typography>
        </CardContent>
        <CardContent>
          <Counter />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to={`/itemDetail/${id}`}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#1b3039",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Agregar
            </Button>
          </Link>
        </CardActions>
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
      </Card>
    </div>
  );
};
