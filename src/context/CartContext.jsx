import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Products } from '@/data/products';
import { Shops } from '@/data/shops';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [productItems] = useState(Products.productItems);
  const [shopItems] = useState(Shops.shopItems);

  // Funciones para manejar el carrito de compras
  const addToCart = (product) => {
    // Lógica para agregar un producto al carrito
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    // Lógica para eliminar un producto del carrito
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // valor proporcionado por el proveedor
  const value = {
    cartItems,
    addToCart,
    productItems,
    shopItems,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//Validación de tipo para children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

