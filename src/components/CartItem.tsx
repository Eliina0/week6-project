import Box from "@mui/material/Box";
import { CartItem as CartItemTypes } from "../types";
import Typography from "@mui/material/Typography";
import QuantityButtons from "./QuantityButtons";

const CartItem = ({ id, name, price, image, quantity }: CartItemTypes) => {
  const totalPrice = price * quantity;

  return (
    <Box sx={{
      borderRadius: 2,
      padding: 3,
      width: '100%',
      maxWidth: 550,
      boxShadow: 2,
      display: "flex",
      flexDirection: "row",
      marginBottom: 2,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#fff',
    }}>
      <Box component="img" src={image} alt={name} sx={{
        width: "80px",
        height: "auto",
        borderRadius: "5px",
        marginRight: 2,
        objectFit: "cover"
      }} />
      
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Price: ${price} x {quantity} = ${totalPrice.toFixed(2)}
        </Typography>
        <QuantityButtons id={id} />
      </Box>
    </Box>
  );
};

export default CartItem;
