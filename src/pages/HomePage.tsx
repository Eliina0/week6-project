import { useContext } from "react";
import { ProductsContext } from "../context/ProductsMenagement";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  console.log(crypto.randomUUID());
  
  const context = useContext(ProductsContext);
  const products = context?.productsList;

  return (
    <Box sx={{ padding: 3 , display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Typography variant="h4" sx={{ marginBottom: 5}}>
        Shopping Products
      </Typography>

      <Grid2 container spacing={3}>
        {products?.map((product) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            key={product.id}
            component="div"
          >
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default HomePage;
