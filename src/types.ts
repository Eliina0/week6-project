import { ReactNode } from "react";

export type ProductsManagementProps = {
  children: ReactNode;
}
export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
export type CartItem = {
    id: string;
    quantity: number;
    name: string;
    price: number;
    image: string
  };
  export type ProductsContextType = {
    products: Product[];
    cart: CartItem[];
    productsList: Product[];
    addItemToCart: (id: string, quantity: number) => void; 
    getItemQuantity: (id: string) => number; 
    getTotalQuantity: () => number;
    addProduct: (product: Product) => void;
    deleteProduct: (id: string) => void; 
    productToEdit: Product | null;
    setProductToEdit: (product: Product | null) => void;
    cleanCart: () => void;
  };
  

//export type ProductFormValuesArray = Product[];
export type ProductFormProps = {
  setShowProductForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ReceiptsProviderProps = {
  children: ReactNode;
}

export type ReceiptsContextType = {
  receipts: ReceiptItem[];
  addReceipts: () => void;
}
export type ReceiptItem = {
  id: string; 
  items: { 
    id: string; 
    name: string; 
    price: number; 
    quantity: number; 
  }[]; 
  totalPrice: number; 
  date: string; 
};

export type SnackbarComponentProps = {
  open: boolean;
  handleClose: () => void;
}

export type QuantityButtonsProps = {
  id: string;
}