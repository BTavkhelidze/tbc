"use client";

import style from "./products.module.css";
import Card from "@/components/Card/Card.jsx";
import Search from "@/components/Search/Search.jsx";
import Sort from "@/components/sort/Sort";
import { useEffect, useState } from "react";

async function fetchProducts(search, order) {
  let res;

  if (!search && order && order !== "default") {
    res = await fetch(
      `https://dummyjson.com/products?sortBy=price&order=${order}`
    );
  } else if (search && order && order !== "default") {
    res = await fetch(
      `https://dummyjson.com/products/search?q=${search}&sortBy=price&order=${order}`
    );
  } else if (search) {
    res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
  } else {
    res = await fetch("https://dummyjson.com/products");
  }

  const data = await res.json();
  return data.products;
}

const Products = ({ searchParams }) => {
  const [products, setProducts] = useState([]);
  const search = searchParams?.search || "";
  const order = searchParams?.order || "default";

  // For Adding Products
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
  });

  useEffect(() => {
    // Function to check localStorage and fetch products if needed
    async function getProducts() {
      // Check if products exist in localStorage for the current search and order
      const cachedProducts = localStorage.getItem(
        `products_${search}_${order}`
      );

      if (cachedProducts) {
        // If products are found in localStorage, use them
        setProducts(JSON.parse(cachedProducts));
        console.log("Loaded from localStorage");
      } else {
        // Otherwise, fetch from the API and store in localStorage
        const fetchedProducts = await fetchProducts(search, order);
        setProducts(fetchedProducts);
        localStorage.setItem(
          `products_${search}_${order}`,
          JSON.stringify(fetchedProducts)
        );
        console.log("Fetched products from API and saved to localStorage");
      }
    }

    getProducts();
  }, [search, order]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const productToAdd = {
      id: new Date().getTime(), // Unique ID for the new product
      name: newProduct.name,
      description: newProduct.description,
      brand: newProduct.brand,
      price: parseFloat(newProduct.price),
      thumbnail: "/default-thumbnail.jpg", // You can set a default image
    };

    const updatedProducts = [...products, productToAdd];
    setProducts(updatedProducts);

    // Update localStorage with the new product
    localStorage.setItem(
      `products_${search}_${order}`,
      JSON.stringify(updatedProducts)
    );

    // Reset form and close the modal
    setNewProduct({ name: "", description: "", brand: "", price: "" });
    setShowForm(false);
  };

  return (
    <main>
      <div className={style.search_wrapper}>
        <Search />
        <Sort />
        <button className={style.addButton} onClick={() => setShowForm(true)}>
          Add Product
        </button>
      </div>

      {showForm && (
        <form className="addProductForm" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Product Brand"
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />
          <button type="submit">Add Product</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}

      <div className={style.content_container}>
        {!products || products.length < 1 ? (
          <p className={style.product_not_found}>Product not found</p>
        ) : (
          products.map((product) => (
            <Card productsObj={product} key={product.id} />
          ))
        )}
      </div>
    </main>
  );
};

export default Products;
