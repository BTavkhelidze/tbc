"use client";
import { useEffect, useState } from "react";
import Posts from "../Post/Posts";

export default function BlogsLocalStorage({ children }) {
  const [storedData, setStoredData] = useState(null);
  useEffect(() => {
    // Get data from local storage
    const dataFromLocalStorage = localStorage.getItem("blogs");

    if (dataFromLocalStorage) {
      // Parse the JSON data and set it in the state
      setStoredData(JSON.parse(dataFromLocalStorage));
    }
  }, []);
  console.log(storedData);

  return (
    <>
      {storedData
        ? storedData.map((post) => (
            <Posts key={post.id} post={post} blogs={storedData} />
          ))
        : children}
    </>
  );
}
