import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

 
  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, size]);

//   console.log(count);
//   console.log(products.length)

  return (
    <section>
      <div className="h-screen overflow-y-scroll  grid grid-cols-1 md:grid-cols-3 gap-4 scroll-my-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      <div>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={`btn btn-sm btn-primary mx-2 ${
              page === number && "btn-secondary"
            }`}
            key={number}
          >
            {number}
          </button>
        ))}

        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </section>
  );
};

export default Products;
