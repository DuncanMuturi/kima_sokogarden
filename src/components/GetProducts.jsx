import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProducts = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [gypsum, setGypsum] = useState([]);
  let [nails, setNails] = useState([]);
  let [filtered_products, setFilteredProducts] = useState([]);

  //   base url for image location
  const img_url = "https://leyonce.alwaysdata.net/static/images/";

  let navigator = useNavigate();

  // function to fetch products from the server
  const getProducts = async () => {
    setError("");
    setLoading("Fetching Products. Please wait...");

    try {
      const response = await axios.get(
        "https://leyonce.alwaysdata.net/api/get_products",
      );
      console.log(response);
      if (response.status === 200) {
        setLoading("");
        setProducts(response.data);

        let gypsum_products = response.data.filter(
          (product) => product.product_category === "gypsum",
        );

        setGypsum(gypsum_products);

        let nail_products = response.data.filter(
          (product) => product.product_category === "nails",
        );

        setNails(nail_products);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log("products: ", products);

  const handleSearch = (search_word) => {
    let filterProducts = products.filter((product) =>
      product.product_name.includes(search_word),
    );
    setFilteredProducts(filterProducts);
  };

  return (
    <div className="row justify-conten-center">
      <Navbar />
      <h3>Available Products</h3>
      <h5 className="text-warning">{loading}</h5>
      <h5 className="text-danger">{error}</h5>

      <div className="input-group m-3">
        <input
          type="text"
          placeholder="Search product by name"
          className="form-control"
          value={search_word}
          onChange={(e) => {
            setSearchWord(() => handleSearch(e.target.value));
          }}
        />
      </div>
      <br />
      <hr />

      {filtered_products.map((product) => (
        <div className="col-md-3 justify-content-center mb-4">
          <div className="card shadow card-margin">
            <img
              src={img_url + product.product_image}
              alt=""
              className="product_img mt-4"
            />

            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning">{product.product_cost}</b>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigator("/makepayment", { state: { product } });
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* map/loop over the product array to access one at a time */}

      <h2 className="text-center my-2 p-4 bg-dark text-white">Gypsum</h2>

      {gypsum.map((product) => (
        <div className="col-md-3 justify-content-center mb-4">
          <div className="card shadow card-margin">
            <img
              src={img_url + product.product_image}
              alt=""
              className="product_img mt-4"
            />

            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning">{product.product_cost}</b>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigator("/makepayment", { state: { product } });
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-center my-2 p-4 bg-dark text-white">Nails</h2>

      {nails.map((product) => (
        <div className="col-md-3 justify-content-center mb-4">
          <div className="card shadow card-margin">
            <img
              src={img_url + product.product_image}
              alt=""
              className="product_img mt-4"
            />

            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning">{product.product_cost}</b>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigator("/makepayment", { state: { product } });
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetProducts;
