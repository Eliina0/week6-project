import { useContext } from "react";
import { ProductsContext } from "../context/ProductsMenagement";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import CartItem from "../components/CartItem";
import Button from "@mui/material/Button";
import { ReceiptsContext } from "../context/ReceiptsProvider";

const CartPage = () => {
  const context = useContext(ProductsContext);
  const receiptsContext = useContext(ReceiptsContext);

  const handleFinishPurchase = () => {
    if (context?.cart.length !== 0) {
      receiptsContext?.addReceipts(); 
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Your Shopping Cart</Typography>
      {context?.cart.length === 0 ? (
        <Typography variant="h6" sx={{ marginTop: 2, color: 'gray' }}>
          Your cart is empty. Add some products to the cart!
        </Typography>
      ) : (
        <>
        <Grid2 container spacing={3}>
          {context?.cart.map((item) => (
            <Grid2 size={{ xs: 12, lg: 4 }} key={item.id}>
              <CartItem
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
              />
            </Grid2>
          ))}
        </Grid2>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button
                variant="contained"
                onClick={handleFinishPurchase} 
                sx={{ padding: '12px 36px', fontSize: '16px', backgroundColor: '#A9B87E' }}
              >
                Finish Purchase
              </Button>
            </Box>
            </>
      )}


    </Box>
  );
};

export default CartPage;
