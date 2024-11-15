import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsMenagement';
import { ProductFormProps } from '../types';

const ProductTable = ({setShowProductForm} : ProductFormProps) => {
  const context = useContext(ProductsContext);
  const productsList = context?.productsList || [];

  return (
    <TableContainer sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </TableCell>
              <TableCell> 
                <Button onClick={() => {context?.setProductToEdit(product); setShowProductForm(true)}} color="primary" variant="outlined" sx={{ marginRight: 1 }}>
                  Edit 
                </Button> 
                <Button onClick={() => context?.deleteProduct(product.id)} color="secondary" variant="outlined"> 
                  Delete 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
