import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

const ProductListPage = () => {
  
  const [showProductForm, setShowProductForm] = useState<boolean>(false);

  const handleProductFormVisibility = () => {
    setShowProductForm((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 2 }}>
      <Typography variant="h5">Product List</Typography>
      <Button variant="contained" onClick={handleProductFormVisibility} sx={{ backgroundColor: '#A9B87E', '&:hover': { backgroundColor: '#8A9C6E' }, marginTop: 2 }}>
        Add New Product
      </Button>
      {showProductForm && <ProductForm setShowProductForm={setShowProductForm}/>}

      <ProductTable setShowProductForm={setShowProductForm}/> 
    </Box>
  );
};

export default ProductListPage;
