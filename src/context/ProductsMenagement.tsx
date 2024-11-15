import { createContext, useEffect, useState } from "react";
import productsData from "../Products.json";
import {
  Product,
  CartItem,
  ProductsContextType,
  ProductsManagementProps,
} from "../types";

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsManagement = ({ children }: ProductsManagementProps) => {
  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(productsData));
    }
  }, []);

  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [productsList, setProductsList] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const addItemToCart = (id: number, quantity: number) => {
    const product = productsList.find((item) => item.id === id);

    if (product) {
      const existingItemIndex = cart.findIndex((item) => item.id === id);
      let updatedCart: CartItem[];

      if (existingItemIndex !== -1) {
        if (quantity === 0) {
          updatedCart = cart.filter((item) => item.id !== id);
        } else {
          updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );
        }
      } else if (quantity > 0) {
        updatedCart = [
          ...cart,
          { id, quantity, name: product.name, price: product.price, image: product.image },
        ];
      } else {
        return; 
      }

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const getItemQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addProduct = (product: Product) => {
    const productId = parseInt(product.id.toString(), 10); 
    const productPrice = parseInt(product.price.toString(), 10); 
    product.id = productId;
    product.price = productPrice;

    const productIndex = productsList.findIndex((p) => p.id === productId);
    let updatedProducts: Product[];

    if (productIndex !== -1) {
      updatedProducts = [...productsList];
      updatedProducts[productIndex] = product;
    } else {
      updatedProducts = [...productsList, product];
    }

    setProductsList(updatedProducts);
    setProductToEdit(null);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id: number) => {
    const updatedProducts = productsList.filter((product) => product.id !== id);
    setProductsList(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const cleanCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const values = {
    products: productsList,
    cart,
    productsList,
    addItemToCart,
    getItemQuantity,
    getTotalQuantity,
    addProduct,
    deleteProduct,
    productToEdit,
    setProductToEdit,
    cleanCart,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsManagement;
