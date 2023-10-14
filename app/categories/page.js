"use client"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';

const Categories = () => {
  const {cartProducts} = useContext(CartContext);
  console.log(cartProducts)
  return (
    <div>
      <Header />
      Categories
    </div>
  )
}

export default Categories;