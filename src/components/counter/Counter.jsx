import { Button, CardActions, CardContent, Typography } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
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
          {contador}
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
      {location.pathname !== "/cart" && (
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => onAdd(contador)}
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#1b3039",
              color: "white",
              marginTop: "30px",
              textTransform: "none",
            }}
          >
            Agregar al carrito
          </Button>
        </CardActions>
      )}
    </CardContent>
  );
};
