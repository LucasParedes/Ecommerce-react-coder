import "./productCard.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ProductCard = ({ marca, modelo, img, id }) => {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "#832a7a0f",
        borderRadius: "20px",
        border: "2px solid #cfa4a4",
      }}
    >
      <CardMedia component="img" alt={marca} height="300" image={img} />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {marca}
        </Typography>
        <Typography variant="body2">{modelo}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#1b3039", color: "white" }}
          >
            Ver Mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
