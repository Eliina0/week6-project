import { useContext, useState } from "react"; 
import { ProductsContext } from "../context/ProductsMenagement"; 
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography"; 
import Grid2 from "@mui/material/Grid2"; 
import CartItem from "../components/CartItem"; 
import Button from "@mui/material/Button"; 
import { ReceiptsContext } from "../context/ReceiptsProvider"; 
import SnackbarComponent from "../components/SnackbarComponent";

const CartPage = () => {
  const context = useContext(ProductsContext); 
  const receiptsContext = useContext(ReceiptsContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFinishPurchase = () => {
    if (context?.cart.length !== 0) {
      receiptsContext?.addReceipts(); 
      setOpenSnackbar(true); 
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{
      padding: { xs: 2, sm: 4 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <Typography variant="h4" sx={{
        marginBottom: 3,
        textAlign: 'center',
      }}>
        Your Shopping Cart
      </Typography>

      {context?.cart.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray', fontWeight: 400 }}>
          Your cart is empty. Add some products to the cart!
        </Typography>
      ) : (
        <>
          <Grid2 container spacing={3} sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            {context?.cart.map((item) => (
              <Grid2 key={item.id} sx={{
                display: 'flex',
                justifyContent: 'center',
                zIndex: 2,
                left: 0, right: 0, top: 0, bottom: 0, 
              }}>
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

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 4,
            width: '100%',
          }}>
            <Button
              variant="contained"
              onClick={handleFinishPurchase} 
              sx={{
                padding: '12px 36px',
                fontSize: '16px',
                backgroundColor: '#A9B87E',
                '&:hover': { backgroundColor: '#8A9C6E' },
                color: "#4A4A48",
              }}
            >
              Finish Purchase
            </Button>
          </Box>
        </>
      )}

      
      <SnackbarComponent open={openSnackbar} handleClose={handleCloseSnackbar} />
    </Box>
  );
};

export default CartPage;
