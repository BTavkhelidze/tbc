"use client";

import style from "./products.module.css";
import Card from "@/components/Card/Card.jsx";
import Search from "@/components/Search/Search.jsx";
import Sort from "@/components/sort/Sort";
import { useEffect, useState } from "react";
import AddProductTemplate from "./components/AddProductTemplate/AddProductTemplate";

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
        console.log(cachedProducts);

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

  return (
    <main>
      <div className={style.search_wrapper}>
        <Search />
        <Sort />
      </div>

      <AddProductTemplate
        products={products}
        setProducts={setProducts}
        search={search}
        order={order}
      />

      <div className={style.content_container}>
        {!products || products.length < 1 ? (
          <p className={style.product_not_found}>Product not found</p>
        ) : (
          products.map((product) => <Card product={product} key={product.id} />)
        )}
      </div>
    </main>
  );
};

export default Products;
