"use client"; // This enables client-side behavior for the component

import { useRouter } from "next/navigation"; // Next.js router for navigation
import { useEffect } from "react";

const DeleteProduct = ({ productId }) => {
  const router = useRouter(); // Access Next.js router

  const handleDelete = () => {
    // Get the 'products__default' object from localStorage
    const storedProducts = JSON.parse(
      localStorage.getItem("products__default")
    );

    if (storedProducts) {
      // Filter out the product with the specified productId
      const updatedProducts = storedProducts.filter(
        (product) => product.id !== parseInt(productId)
      );

      // Update localStorage with the new product list
      localStorage.setItem(
        "products__default",
        JSON.stringify(updatedProducts)
      );

      // After deletion, redirect to the products page
      router.push("/products");
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      Delete Product
    </button>
  );
};

export default DeleteProduct;
