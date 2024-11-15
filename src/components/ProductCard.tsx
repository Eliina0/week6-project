import { Box, Typography } from "@mui/material";
import QuantityButtons from "./QuantityButtons";
import { Product } from "../types";

const ProductCard = ({ id, name, description, price, image }: Product) => {

  return (
    <Box sx={{ borderRadius: 2, padding: 2, maxWidth: 300, boxShadow: 1 }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "4px" }} />
      <Typography variant="h6" gutterBottom>{name}</Typography>
      <Typography variant="body2" color="textSecondary" >{description}</Typography>
      <Typography variant="body1" color="primary">Price: ${price}</Typography>
      <QuantityButtons id={id} />
    </Box>
  );
};

export default ProductCard;
