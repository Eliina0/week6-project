import { Typography, Toolbar, IconButton, Badge, Box } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsMenagement';

const AppTitle = () => {
    const context = useContext(ProductsContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' , marginTop: 4}}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
          paddingLeft: { xs: "35px", sm: '280px' },  
          color: '#363f30', 
          fontWeight: 'bold',
        }}
      >

        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Shopping App
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1rem', color: '#6e7d6e' }}>
            Start shopping for great deals and products...
          </Typography>
        </Box>

        <IconButton color="inherit">
          <Badge badgeContent={context?.getTotalQuantity()} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default AppTitle;
