// AddToCartButton.js
'use client';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';

const AddToCartButton = ({ product }) => {
  const addToCart = () => {
    const cartItem = {
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      _id: product._id,
    };

    const check = fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Added to cart:', data);
        // Handle success, e.g., show a notification or update the UI
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        // Handle error, e.g., show an error message
      });

      toast.promise(check, {
        loading: "Sending",
        success: "Added to Cart",
        error: "Some Error Occur",
      });
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
