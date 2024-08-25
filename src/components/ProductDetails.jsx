//! how to do dynamic routing in with react router dom
// import { useLocation } from "react-router-dom";

// const ProductDetails = () => {
//   const { state } = useLocation();
//   console.log(state);
//   console.log({ state });

//   return (
//     <>
//       <h1>Product Deatils</h1>
//       {state ? (
//         <><br /><br />
//           <h1>{state.title}</h1>
//           <h3>{state.description}</h3>
//         </>
//       ) : (
//         <>
//           <h1>No Product Found</h1>
//         </>
//       )}
//     </>
//   );
// };

// export default ProductDetails;

//! another method of creating product detail page with dynamic routing
//! making product detail page with fetching data

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const { id } = useParams();

  console.log(id);
  console.log(state);
  console.log({ state });

  useEffect(() => {
    setloading(true);
    setError(null);
    fetchingProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingProducts = async () => {
    // ! asios from axios npm packagge
    await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setloading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <>
      {loading && <h1>Loading Data</h1>}
      {error && <p>Error</p>}
      {!loading && !error && (
        <>
          <br />
          <br />
          <h1>{state.title}</h1>
          <h3>{state.description}</h3>
        </>
      )}
    </>
  );
};

export default ProductDetails;
