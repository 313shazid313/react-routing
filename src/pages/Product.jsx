import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setloading(true);
    setError(null);
    fetchingProducts();
  }, []);

  const fetchingProducts = async () => {
    // ! asios from axios npm packagge
    await axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.products);
        setProducts(response.data.products);
        setloading(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <>
      <h1>All Products</h1>
      {loading && <h1>Loading Data</h1>}
      {error && <p>Error</p>}

      {!error && !loading && (
        <section>
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <>
                  <br />
                  <h2>{product.title}</h2>
                  <p>{product.category}</p>
                  <h2>${product.price}</h2>
                  <p>{product.description.substring(0, 50)}....</p>
                  <Link to={`/product/${product.id}`} state={product}>
                    Show Details
                  </Link>
                  <br />
                </>
              );
            })}
          {/* another way with object destructuring */}
          {/* products.map((product) => {
          // destructiring objects
          const { title, category, price, description } = product;
          return (
            <>
              <br />
              <h2>{title}</h2>
              <p>{category}</p>
              <h2>${price}</h2>
              <p>{description.substring(0, 50)}....</p>
              <br />
            </>
          );
        })} */}
        </section>
      )}
    </>
  );
};

export default Product;
