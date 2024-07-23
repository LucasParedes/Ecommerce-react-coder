import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";

export const Form = ({ sendForm, handleChange }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <form onSubmit={sendForm}>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "100px", width: "1600px", marginLeft: "0px" }}
      >
        <Grid item xs={12} md={6} sx={style}>
          <FormLabel required>Nombre</FormLabel>
          <OutlinedInput
            onChange={handleChange}
            id="first-name"
            name="name"
            type="text"
            placeholder="Lucas"
            autoComplete="Nombre"
            required
          />
        </Grid>
        <Grid item xs={12} md={6} sx={style}>
          <FormLabel required>Email</FormLabel>
          <OutlinedInput
            onChange={handleChange}
            id="correo"
            name="email"
            type="email"
            placeholder="lucas@gmail.com"
            autoComplete="Email"
            required
          />
        </Grid>
        <Grid item xs={6} sx={style}>
          <FormLabel required>Telefono</FormLabel>
          <OutlinedInput
            onChange={handleChange}
            id="telefono"
            name="phone"
            type="phone"
            placeholder="11xxxxxxxx"
            autoComplete="Telefono"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              fontSize: "10px",
              backgroundColor: "#1b3039",
              color: "white",
            }}
          >
            Confirmar Compra
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
