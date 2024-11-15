import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import { ReceiptsContext } from "../context/ReceiptsProvider";
import ReceiptCard from "../components/ReceiptCard";

const ReceiptsPage = () => {
  const context = useContext(ReceiptsContext);
  const receipts = context?.receipts ?? [];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Receipts
      </Typography>
      {receipts.length === 0 ? (
        <Typography variant="body1">No receipts available.</Typography>
      ) : (
        <Grid2 container spacing={2}>
          {receipts.map((receipt) => (
            <Grid2 size={{xs:12, sm:6, md:4}}  key={receipt.id}>
              <ReceiptCard
                id={receipt.id}
                date={receipt.date}
                totalPrice={receipt.totalPrice}
                items={receipt.items}
              />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default ReceiptsPage;
