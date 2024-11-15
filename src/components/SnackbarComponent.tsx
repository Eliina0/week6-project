import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SnackbarComponentProps } from "../types"; 

const SnackbarComponent = ({ open, handleClose }: SnackbarComponentProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Your order was successfully placed! Thank You!
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
