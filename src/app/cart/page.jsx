'use client';
import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // fetchCart()
  // setCartItems()
  useEffect(() => {
    // Fetch data from your API
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("test")
          setCartItems(data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  return (
    <>
  <Header />
  <main className="p-4">
    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Image</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Category</th>
          <th className="py-2 px-4">Price</th>
          <th className='py-2 px-4'>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={item.id} className="">
            <td className="py-2 px-4"><img src={item.image} alt={item.name} className=" h-auto w-24" /> </td>
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">{item.category}</td>
            <td className="py-2 px-4">${item.price}</td>
            <td className="py-2 px-4"><button className='px-2 py-3 text-white bg-red-500 hover:bg-red-700 rounded-3xl'>Remove</button></td>
          </tr>
        ))}
        
      </tbody>
    </table>
    <div className='flex justify-center'>
          <button className='p-3 bg-green-500 text-white hover:bg-green-800 rounded-xl'>Checkout</button>
        </div>
  </main>
  <Footer />
</>

  );
}
