'use client';

import { useEffect, useState } from 'react';
import style from './singleProduct.module.css';
import Image from 'next/image';
import DeleteProduct from '@/components/DeleteProduct/DeleteProduct';
import EditProductTemplate from '@/components/EditProductTemplate/EditProductTemplate.jsx';

export async function fetchProductFromAPI(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error(`Product with id '${id}' not found`);
  }
  const data = await res.json();
  return data;
}

export default function Product({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve 'products__default' from localStorage and parse it
    const storedProducts = JSON.parse(
      localStorage.getItem('products__default')
    );

    if (storedProducts) {
      // Find the product by its ID in the storedProducts array or object
      const foundProduct = storedProducts.find(
        (prod) => prod.id === parseInt(params.id)
      );

      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
      } else {
        fetchProductFromAPI(params.id).then((data) => {
          setProduct(data); // Update the product state
          setLoading(false);

          const updatedProducts = [...storedProducts, data];
          localStorage.setItem(
            'products__default',
            JSON.stringify(updatedProducts)
          );
        });
      }
    } else {
      fetchProductFromAPI(params.id).then((data) => {
        setProduct(data); // Update the product state
        setLoading(false);

        localStorage.setItem(
          'products__default',
          JSON.stringify([data]) // Initialize with the first product
        );
      });
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const defaultImagePath =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEXq6upqamrV1dXu7u5iYmLk5ORcXFxfX1+2trbKyspmZma5ubnW1tbx8fFlZWXl5eXc3Nx3d3e/v7+kpKRubm6ysrLGxsaPj4+bm5uVlZWCgoJ8fHyhoaFYWFhTU1OKior/FHn9AAAEUUlEQVR4nO2dCZOqOhBGwQAZGUJwX9/z///LC5GdoIiQNPd+p6ampkZZjmmSTkfUcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/KswC8f0jWJB0PkvMMj/Ngxj1yCeDcPQdWNuAi99Lbkdw3i3NsIuttWG3q9gBhC/nj1DI304g+Fc6AzZHMp0DJmQq8gRkx+IjKE4bgLOg5M/dTtSMRR3rsbmmK8nViRiyA68yD+CZNoDETGUQZlhhY9pr0UahuzgVUlkMO1MgIahuISVIT9OeiUSMTzVDL3tGMPesZSI4bk2meKrEYYs+um5fGkYOkdeGcZjdifdoGeYIWIo9lWQ7sb0pen2XqJVJGLIoqIR482YGL2p61jqNiVi6LDVnqdnGQaPEfsSD3UZh9oXh4ph2hduH5vbeT0iRMUlH01jXbJAxjCbXKSMCFGxK9MF79xVJGQ4EnGo9cP80FFcvKHYVimtNiFauiFbNwTTrLadLyzckEWe2yJszaGXbcj8jqAb7pvrMIs2ZHIfdgzd+NrobZZtuNEIpmPGpa5I0nBgVVFce5Z3eD21pWgodoPmT+LUvQiLDrU2xSRoyFZBrJ8mNBDnXsHGHJOiYToTeq8odrxfMFUsd0DPUNzV1fWmMix+Xwq67r54JjnDNEafp6id7JXPOr4RdMNbvj09w3y2H+5l/8bly/CC+PTsUKkZ1mpSm95tWfKikynJyyHEDOuJdDpl7wlUf4BfSqDKb8QMnX3tDOOrvrTEdLmaVjErv9EyFJdGlqJXzMtOQ8jKb6QM2brVQ3qawktvrqYjlIyUodNthFNbsSw7DTPckDJsxehT8dJUFPdPBFX5jY5hJ0afio3yWaPsNAjvvrX4jiHW/pcOfq8UW2WnYYo3a+9raxnqYvSpWM72hLaVh1haEOzWvPubpyiCVosbizSUr2Z7SpElo9+xScEwX1zpIfgV2RLhaAgYsu3rAAy2wtGXnZZi+CpGFfz4SSpDz1A83rZPPL4FCRi+i9GvsW7ozyxo3VBcZxa0bch+5m5Cy4a69aO/y1Bcv+klF2Ao5o9Ry4aJAUGrhmJ4WWmZhp/P2RdmyIzEqE1DsTEiaPHOrsP8Q6Fdw0ELLEs23N4MCVq7h9TQRWjR0BwwhCEM7RtauVudewYJbBj+mORgw9DErfgVNgwBAAAAAAAAAAAAAAAAAAAANcq1o9Za0oIXlbKTlurD8JOKqEvt0fS5UkrHzhcEDEG1hJRKKYpW36DEM99itxTIxGpaXxrW/sxULbtJP/nOZ5Bz4ks70evPL1fTNN+YyfPAZvTU74k/f/kdJtuv0IyMGvrGDVcr04GaGPYzHKQKmZiyTBJLvWlGfSyMJut6ql2mY6IttQL12soJspmGoRrtZbl/IuSueTqaZZ4fGOVpqk/Qqw0rfgpkhvZbqtQjL7YEAAAAAAAAAAAAAAAAAAAAAIBp+QOn81PHqLV3GQAAAABJRU5ErkJggg==';

  return (
    <main className='w-full dark:bg-[#0F172A]'>
      <div className={style.product_container}>
        <div className={style.wrapper_img_details}>
          <div className={style.product_image_wrapper}>
            <Image
              alt={product.description}
              src={product?.images?.[0] || defaultImagePath}
              width={300}
              height={300}
              className='dark:bg-[#1E293B]'
            />

            <div
              className={`${style.other_pictures} dark:bg-[#1E293B] mt-[10px]`}
            >
              {product.images && product.images.length > 0 ? (
                <Image
                  alt={product.description}
                  src={product.images[0]}
                  width={50}
                  height={50}
                  className='object-center w-full '
                />
              ) : (
                <></>
              )}
              {product.images && product.images.length > 1 ? (
                <Image
                  alt={product.description}
                  src={product.images[1]}
                  width={50}
                  height={50}
                />
              ) : (
                <></>
              )}
              {product.images && product.images.length > 2 ? (
                <Image
                  alt={product.description}
                  src={product.images[2]}
                  width={50}
                  height={50}
                />
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className={style.product_details}>
            <h3
              className={`${style.product_description} dark:text-[#E2E8F0] text-black`}
            >
              {product.description}
            </h3>
            <p
              className={`${style.product_rating} dark:text-[#E2E8F0] text-black `}
            >
              Rating: {product.rating}/5
            </p>
            <div className={style.product_meta}>
              <p className=' dark:text-[#E2E8F0] text-black'>
                Brand: {product.brand}
              </p>
              <p
                className={`{style.product_price}  dark:text-[#E2E8F0] text-black`}
              >
                Price: ${product.price}
              </p>
              {product.discountPercentage > 1 && (
                <p
                  className={`${style.product_discount}  dark:text-[#E2E8F0] text-black`}
                >
                  Discount: {product.discountPercentage}%
                </p>
              )}
            </div>
          </div>
          <div className={style.add_to_cart_wrapper}>
            <div className={style.delete_edit_btn_wrapepr}>
              <DeleteProduct productId={params.id} />
              <EditProductTemplate productId={params.id} />
            </div>
            <p className={`${style.price} dark:text-[#E2E8F0] text-black`}>
              ${product.price}
            </p>
            <p className={`${style.shipping} dark:text-[#E2E8F0] text-black`}>
              {product.shippingInformation}
            </p>
            {product.stock > 0 ? (
              <p className={style.in_stock}>In Stock</p>
            ) : (
              <p>Not in Stock</p>
            )}
            <button className={style.add_to_cart}>Add to Cart</button>
            <div className={style.product_return_policy}>
              <p className='dark:text-[#E2E8F0] text-black'>
                Returns: {product.returnPolicy}
              </p>
              <p className='dark:text-[#E2E8F0] text-black '>
                {' '}
                Minimum Order Quantity: {product.minimumOrderQuantity}
              </p>
            </div>
          </div>
        </div>
        <div className={style.product_warranty}>
          <h3 className='dark:text-[#E2E8F0] text-black'>
            Warranty Information
          </h3>
          <p className='dark:text-[#E2E8F0] text-black'>
            {product.warrantyInformation}
          </p>
        </div>

        <div className={style.product_reviews}>
          <h3 className='dark:text-[#E2E8F0] text-black'>Customer Reviews</h3>
          <ul className={style.reviews_list}>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, i) => (
                <div className={style.review_wrapper} key={i}>
                  <div className={style.customer}>
                    <Image
                      src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png'
                      alt='Customer'
                      width={20}
                      height={20}
                    />
                    <p className='dark:text-[#E2E8F0] text-black'>
                      {review.reviewerName}
                    </p>
                  </div>
                  <div className={style.rating}>
                    <p className='dark:text-[#E2E8F0] text-black'>
                      Review:{' '}
                      <span className='text-[#0EA5E9]'>{review.rating}/5</span>
                    </p>
                    <p className=' dark:text-[#E2E8F0] text-black '>
                      Comment:{' '}
                      <span className='text-[#0EA5E9] '>{review.comment}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className='dark:text-[#E2E8F0] text-black'>
                No reviews available for this product.
              </p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
