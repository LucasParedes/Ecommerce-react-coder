import "./productCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const ProductCard = ({ marca, modelo, img }) => {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "#832a7a0f",
        borderRadius: "20px",
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
    </Card>
  );
};
