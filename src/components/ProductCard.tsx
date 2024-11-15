import { Box, Typography } from "@mui/material";
import QuantityButtons from "./QuantityButtons";
import { Product } from "../types";

const ProductCard = ({ id, name, description, price, image }: Product) => {
  return (
    <Box sx={{
      borderRadius: 2,
      padding: 2,
      maxWidth: 300,
      boxShadow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      marginBottom: 2 
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '100%', 
          height: 'auto', 
          borderRadius: "4px", 
          objectFit: 'cover', 
          maxHeight: '400px' 
        }} 
      />
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
        {description}
      </Typography>
      <Typography variant="body1" color="primary" sx={{ marginBottom: 2 }}>
        Price: ${price}
      </Typography>
      <QuantityButtons id={id} />
    </Box>
  );
};

export default ProductCard;
