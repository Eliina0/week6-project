import { useState } from "react"; 
import Typography from "@mui/material/Typography"; 
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom"; 
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import ReceiptIcon from "@mui/icons-material/Receipt"; 
import ProductsIcon from "@mui/icons-material/Category"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListItemText from "@mui/material/ListItemText";

const sidebarItems = [
  { text: "Products", icon: <ProductsIcon />, path: "/" },
  { text: "Cart", icon: <ShoppingCartIcon />, path: "/cart" },
  { text: "Add Product", icon: <AddBoxIcon />, path: "/add-product" },
  { text: "Receipts", icon: <ReceiptIcon />, path: "/receipts" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={{ display: { sm: "none" } }}>
        <IconButton onClick={handleToggleDrawer} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#D1CFC2", 
            color: "#4A4A48", 
            paddingTop: "20px", 
          },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box sx={{ padding: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Menu
          </Typography>
        </Box>

        <Box sx={{ overflow: "auto" }}>
          <List>
            {sidebarItems.map(({ text, icon, path }) => (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={path}
                  sx={{
                    color: "#4A4A48", 
                    '&:hover': {
                      backgroundColor: "#ACB087", 
                      borderRadius: '5px'
                    },
                    marginBottom: "-10px",
                  }}
                >
                  <ListItemIcon sx={{ color: "#4A4A48", minWidth: "32px" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "14px" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleToggleDrawer}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#D1CFC2", 
            color: "#4A4A48", 
          },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            {sidebarItems.map(({ text, icon, path }) => (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={path}
                  sx={{
                    color: "#4A4A48", 
                    marginBottom: "5px", 
                    fontSize: "14px", 
                  }}
                >
                  <ListItemIcon sx={{ color: "#4A4A48", minWidth: "32px" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ fontSize: "14px" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
