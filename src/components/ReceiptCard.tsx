import Card from "@mui/material/Card";
import { ReceiptItem } from "../types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ReceiptCard = ({ id, date, totalPrice, items }: ReceiptItem) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 2,
        backgroundColor: '#fffffc',
        boxShadow: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}> 
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ fontWeight: 500 }}
        >
          Id: {id}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ fontWeight: 500 }}
        >
          Date: {new Date(date).toLocaleString()}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            marginTop: 1, 
            color: '#4A4A48',  
            fontWeight: 'bold',
          }}
        >
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        <Typography 
          variant="subtitle1" 
          sx={{ fontWeight: 600, color: '#75725f' }}  
        >
          Items:
        </Typography>
        {items.map((item) => (
          <Typography key={item.id} variant="body2" sx={{ color: '#555' }}>
            {item.quantity} x {item.name} - ${item.price} each
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ReceiptCard;
