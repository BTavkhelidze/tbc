"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DeleteProduct = ({ productId }) => {
  const router = useRouter();

  const handleDelete = () => {
    const storedProducts = JSON.parse(
      localStorage.getItem("products__default")
    );

    if (storedProducts) {
      const updatedProducts = storedProducts.filter(
        (product) => product.id !== parseInt(productId)
      );

      localStorage.setItem(
        "products__default",
        JSON.stringify(updatedProducts)
      );

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
