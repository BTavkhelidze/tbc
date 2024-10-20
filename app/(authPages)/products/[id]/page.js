import style from './singleProduct.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return data;
};

export default async function Product({ params }) {
  const product = await getProduct(params.id);

  return (
    <main className={style.product_container}>
      <div className={style.wrapper_img_details}>
        <div className={style.product_image_wrapper}>
          <Image
            alt={product.description}
            src={product.images[0]}
            width={300}
            height={300}
          />

          <div className={style.other_pictures}>
            {product.images.length > 0 && (
              <Image
                alt={product.description}
                src={product.images[0]}
                width={50}
                height={50}
              />
            )}
            {product.images.length > 1 && (
              <Image
                alt={product.description}
                src={product.images[1]}
                width={50}
                height={50}
              />
            )}
            {product.images.length > 2 && (
              <Image
                alt={product.description}
                src={product.images[2]}
                width={50}
                height={50}
              />
            )}
          </div>
        </div>

        <div className={style.product_details}>
          <h3 className={style.product_description}>{product.description}</h3>
          <p className={style.product_rating}>Rating: {product.rating}/5</p>
          <div className={style.product_meta}>
            <p>Brand: {product.brand}</p>
            <p className={style.product_price}>Price: ${product.price}</p>
            {product.discountPercentage > 1 && (
              <p className={style.product_discount}>
                Discount: {product.discountPercentage}%
              </p>
            )}
          </div>
        </div>
        <div className={style.add_to_cart_wrapper}>
          <p className={style.price}>${product.price}</p>
          <p className={style.shipping}>{product.shippingInformation}</p>
          {product.stock > 0 ? (
            <p className={style.in_stock}>In Stock</p>
          ) : (
            <p>Not in Stock</p>
          )}
          <button className={style.add_to_cart}>Add to Cart</button>
          <div className={style.product_return_policy}>
            <p>Returns: {product.returnPolicy}</p>
            <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
          </div>
        </div>
      </div>
      <div className={style.product_warranty}>
        <h3>Warranty Information</h3>
        <p>{product.warrantyInformation}</p>
      </div>

      <div className={style.product_reviews}>
        <h3>Customer Reviews</h3>
        <ul className={style.reviews_list}>
          {product.reviews.map((review, i) => (
            <div className={style.review_wrapper} key={i}>
              <div className={style.customer}>
                <Image
                  src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png'
                  alt='Customer'
                  width={20}
                  height={20}
                />
                <p>{review.reviewerName}</p>
              </div>
              <div className={style.rating}>
                <p>
                  Review: <span>{review.rating}/5</span>
                </p>
                <p>
                  Comment: <span>{review.comment}</span>
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
