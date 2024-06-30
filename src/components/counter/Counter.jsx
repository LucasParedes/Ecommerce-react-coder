import { Button, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { neumatics } from "../../products/neumatics";
import { useParams } from "react-router-dom";

export const Counter = () => {
  const { id } = useParams();
  const [contador, setContador] = useState(1);

  const sumar = () => {
    const neumatico = neumatics.find((item) => item.id === +id);
    if (neumatico) {
      const { stock } = neumatico;
      contador < stock ? setContador(contador + 1) : {};
    }
  };

  const restar = () => {
    contador > 1 ? setContador(contador - 1) : {};
  };

  return (
    <CardContent>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          onClick={restar}
          className="MuiButton-textPrimary"
          sx={{
            backgroundColor: " #1b3039",
            width: "20px",
            height: "20px",
          }}
        >
          -
        </Button>
        <Typography style={{ flex: 1, textAlign: "center" }}>
          {" "}
          {contador}{" "}
        </Typography>
        <Button
          variant="contained"
          onClick={sumar}
          className="MuiButton-textPrimary"
          sx={{
            backgroundColor: " #1b3039",
            width: "20px",
            height: "20px",
          }}
        >
          +
        </Button>
      </div>
    </CardContent>
  );
};
