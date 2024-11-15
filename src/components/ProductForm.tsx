import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductFormProps, Product } from "../types";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsMenagement";

const ProductForm = ( {setShowProductForm}: ProductFormProps ) => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<Product>();
  
  const context = useContext(ProductsContext);

  useEffect(() => {
    if(context?.productToEdit) {
      reset(context?.productToEdit);
    }
  },[context?.productToEdit]);
  
  const onSubmit:SubmitHandler<Product> = (data) => {
    context?.addProduct(data);
    console.log(data);

    setShowProductForm(false);
  };

  console.log(watch());
  
  const validateId = (id: number) => {
    console.log(id);
    
    if (!context?.productToEdit) {
      const isIDUnique = !context?.productsList.some((product) => product.id == id);
      return isIDUnique ? true : "The ID is already taken. Please choose a unique ID.";
    }
    return true;  
  };
  
  
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        width: '100%',
        maxWidth: 600,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <TextField
          label="ID"
          variant="outlined"
          type="number"
          {...register("id", { required: 'ID is required!' , validate: (value) => validateId(value)})}
          error={!!errors.id}
          helperText={errors.id?.message}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Product Name"
          variant="outlined"
          {...register("name", { required: 'Product name is required!' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        
        <TextField
          label="Product Description"
          variant="outlined"
          {...register("description", { required: "Product description is required" })}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={3}
          sx={{ marginBottom: 2 }}
        />
        
        <TextField
          label="Product Price"
          variant="outlined"
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price must be greater than 0" },
          })}
          error={!!errors.price}
          helperText={errors.price?.message}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        
        <TextField
          label="Product Image URL"
          variant="outlined"
          fullWidth
          {...register("image", { required: "Product image URL is required" })}
          error={!!errors.image}
          helperText={errors.image?.message}
          sx={{ marginBottom: 2 }}
        />
        
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#A9B87E',
            '&:hover': { backgroundColor: '#8A9C6E' },
            marginTop: 2,
          }}
        >
          {context?.productToEdit ? "Edit Product" : "Add Product"}
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
