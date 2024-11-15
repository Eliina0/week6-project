import Box from "@mui/material/Box";
import { CartItem as CartItemTypes } from "../types";
import { Typography } from "@mui/material";
import QuantityButtons from "./QuantityButtons";

const CartItem = ({ id, name, price, image, quantity }: CartItemTypes) => {
  const totalPrice = price * quantity;

  return (
    <Box sx={{borderRadius: 2, padding: 2, width: 350, boxShadow: 1, display: "flex", flexDirection: "row" }}>

      <Box component="img" src={image} alt={name} sx={{ width: "100px", height: "auto", borderRadius: "5px", marginRight: 2, }} />

      <Box >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Price: ${price} x {quantity} = ${totalPrice.toFixed(2)}
        </Typography>
        <QuantityButtons id={id} />
      </Box>
    </Box>
  );
};

export default CartItem;
