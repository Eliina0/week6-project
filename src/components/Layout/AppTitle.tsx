import { Typography, Toolbar, IconButton, Badge, Box } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsMenagement';
import { useNavigate } from 'react-router-dom';

const AppTitle = () => {
    const context = useContext(ProductsContext);
    const navigate  = useNavigate();

  return (
    <>
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
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4A4A48'  }}>
            Shopping App
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1rem', color: '#6e7d6e' }}>
            "Start shopping now for incredible deals and top products!"
          </Typography>
        </Box>

        <IconButton color="inherit" onClick={() => navigate('/cart')}>
          <Badge badgeContent={context?.getTotalQuantity()} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </Box>
    <Box sx={{ borderBottom: '1px solid #D1CFC2', width: '100%', marginTop: 2 }} />
    </>
  );
};

export default AppTitle;
