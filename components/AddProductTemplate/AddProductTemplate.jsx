import React from 'react';
import styles from './AddProductTemplate.module.css';
import { useState } from 'react';

export default function AddProductTemplate({
  products,
  setProducts,
  search,
  order,
}) {
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const productToAdd = {
      id: new Date().getTime(), // Unique ID for the new product
      title: newProduct.title,
      description: newProduct.description,
      price: parseFloat(newProduct.price),
      brand: newProduct.brand,
    };

    const updatedProducts = [productToAdd, ...products];
    setProducts(updatedProducts);

    // Update localStorage with the new product
    localStorage.setItem(
      `products_${search}_${order}`,
      JSON.stringify(updatedProducts)
    );

    // Reset form and close the modal
    setNewProduct({ title: '', description: '', price: '', brand: '' });
    setShowForm(false);
  };

  return (
    <>
      <div className={styles.main_Button_div}>
        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          Add Product
        </button>
      </div>

      {showForm && (
        <form
          className={`${styles.overlay__wrapper} ${styles.addProductForm}`}
          onSubmit={handleFormSubmit}
        >
          <input
            type='text'
            placeholder='Product Name'
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            required
          />
          <input
            type='text'
            placeholder='Product Description'
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            required
          />
          <input
            type='text'
            placeholder='Product Brand'
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
            required
          />
          <input
            type='number'
            placeholder='Product Price'
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />
          <button className={styles.button} type='submit'>
            Add Product
          </button>
          <button
            className={styles.button}
            type='button'
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
}
