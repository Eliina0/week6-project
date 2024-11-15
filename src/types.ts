import { ReactNode } from "react";

export type ProductsManagementProps = {
  children: ReactNode;
}
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  
export type CartItem = {
    id: number;
    quantity: number;
    name: string;
    price: number;
    image: string
  };
export type ProductsContextType = {
  products: Product[];
  cart: CartItem[];
  productsList: Product[];
  addItemToCart: (id: number, quantity: number) => void;
  getItemQuantity: (id: number) => number;
  getTotalQuantity: () => number;
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void; 
  productToEdit: Product | null;
  setProductToEdit: (product: Product | null) => void;
  cleanCart: () => void;
}

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
    id: number; 
    name: string; 
    price: number; 
    quantity: number; 
  }[]; 
  totalPrice: number; 
  date: string; 
};
