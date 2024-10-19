import style from './products.module.css';
import Card from '@/components/Card/Card.jsx';
import Search from '@/components/Search/Search.jsx';
import Sort from '@/components/sort/Sort';

async function getProducts(search, order) {
  let res;

  if (!search && order && order !== 'default') {
    res = await fetch(
      `https://dummyjson.com/products?sortBy=price&order=${order}`
    );
  } else if (search && order && order !== 'default') {
    res = await fetch(
      `https://dummyjson.com/products/search?q=${search}&sortBy=price&order=${order}`
    );
  } else if (search) {
    res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
  } else {
    res = await fetch('https://dummyjson.com/products');
  }

  const data = await res.json();
  return data.products;
}

const Products = async ({ searchParams }) => {
  const search = searchParams?.search || '';
  const order = searchParams?.order || 'default';

  const products = await getProducts(search, order);

  return (
    <main>
      <div className={style.search_wrapper}>
        <Search />
        <Sort />
      </div>
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
