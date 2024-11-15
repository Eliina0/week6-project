import { createContext, useState, useContext } from "react";
import { ReceiptItem, ReceiptsContextType, ReceiptsProviderProps } from "../types"; 
import { ProductsContext } from "../context/ProductsMenagement";  


export const ReceiptsContext = createContext<ReceiptsContextType | undefined>(undefined);

const ReceiptsProvider = ({ children }: ReceiptsProviderProps) => {
  const storedReceipts = localStorage.getItem("receipt");
  const initialReceipts = storedReceipts ? JSON.parse(storedReceipts) : [];

  const [receipts, setReceipts] = useState<ReceiptItem[]>(initialReceipts);

  const productsContext = useContext(ProductsContext);

  const addReceipts = () => {
    const cart = productsContext?.cart ?? []; 
    if (cart.length !== 0) {
      const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); 

      const receipt = {
        id: new Date().toISOString(), 
        items: cart,  
        totalPrice,
        date: new Date().toISOString(), 
      };

      const updatedReceipts = [...receipts, receipt];
      setReceipts(updatedReceipts);
      productsContext?.cleanCart();
      localStorage.setItem("receipt", JSON.stringify(updatedReceipts));
    }
  };

  const values = { receipts, addReceipts };

  return (
    <ReceiptsContext.Provider value={values}>
      {children}
    </ReceiptsContext.Provider>
  );
};

export default ReceiptsProvider;
