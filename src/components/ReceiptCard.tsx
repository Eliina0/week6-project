import Card from "@mui/material/Card";
import { ReceiptItem } from "../types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


const ReceiptCard = ({ date, totalPrice, items }: ReceiptItem) => {
  return (
    <Card sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Date: {new Date(date).toLocaleString()}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        <Typography variant="subtitle1">Items:</Typography>
        {items.map((item) => (
          <Typography key={item.id} variant="body2">
            {item.quantity} x {item.name} - ${item.price} each
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ReceiptCard;
