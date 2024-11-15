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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        marginTop: showProductForm ? 0 : "50px",
        width: "100vw",
        height: "100%", 
        boxSizing: "border-box", 
        textAlign: "center", 
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Product List
      </Typography>

      <Button
        variant="contained"
        onClick={handleProductFormVisibility}
        sx={{
          backgroundColor: "#A9B87E",
          "&:hover": { backgroundColor: "#8A9C6E" },
          color: "#4A4A48",
          marginTop: 2,
          display: { xs: "inline-block", sm: "inline-block" }, 
        }}
      >
        Add New Product
      </Button>

      {showProductForm && <ProductForm setShowProductForm={setShowProductForm} />}

      <Box
        sx={{
          width: "100%",
          maxWidth: 1200, 
          marginTop: 4,
          paddingX: 2, 
          overflow: "hidden", 
        }}
      >
        <ProductTable setShowProductForm={setShowProductForm} />
      </Box>
    </Box>
  );
};

export default ProductListPage;
