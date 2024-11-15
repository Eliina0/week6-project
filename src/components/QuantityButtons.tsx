import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Add, Remove } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsMenagement";

interface QuantityButtonsProps {
    id: number;
  }

const QuantityButtons = ( {id}: QuantityButtonsProps ) => {
    const context = useContext(ProductsContext);
    const [quantity, setQuantity] = useState(context?.getItemQuantity(id) || 0); 
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
    <IconButton
      onClick={() => { setQuantity(quantity - 1); }}
      disabled={quantity <= 0}
    >
      <Remove />
    </IconButton>
    <Typography variant="body1" sx={{ margin: "0 10px" }}>{quantity}</Typography>
    <IconButton
      onClick={() => { setQuantity(quantity + 1); }}
    >
      <Add />
    </IconButton>
    
    <Button
      variant="contained"
      onClick={() => context?.addItemToCart(id, quantity)}
      sx={{
        backgroundColor: '#A9B87E', 
        '&:hover': {
          backgroundColor: '#8A9C6E', 
        },
        marginLeft: 2, 
        color: "#fff", 
      }}
    >
      Add to Cart
    </Button>
  </Box>
  )
}

export default QuantityButtons