import style from './products.module.css';

import Card from '@/components/card/Card.jsx';

import Search from '@/components/Search/Search.jsx';

async function getProducts(search) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${search || ''}`
  );

  const data = await res.json();

  return data.products;
}

const Products = async ({ searchParams }) => {
  const { search } = searchParams;
  console.log('searchparams ', search);

  const products = await getProducts(search);
  console.log(products);

  return (
    <main>
      {/* {isLoading && <p className='loading'>Loading...</p>}

{!isLoading && !error && (
  
)} */}
      <Search />
      <div className={style.content_container}>
        {products.length < 1 && (
          <p className={style.product_not_found}>product not found</p>
        )}
        {products.map((product) => (
          <Card productsObj={product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default Products;
