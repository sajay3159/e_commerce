import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-lg-3">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };


  // Define state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection
  const handleCategorySelect = (cat) => {
    setFilter(cat === "All" ? data : data.filter((x) => x.category === cat));
    setSelectedCategory(cat);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-between mb-3">
          <div>
            <button
              className={`btn me-2 ${selectedCategory === "All" ? "btn-dark" : "btn-white"}`}
              onClick={() => handleCategorySelect("All")}
            >
              All
            </button>
            <button
              className={`btn me-2 ${selectedCategory === "men's clothing" ? "btn-dark" : "btn-white"}`}
              onClick={() => handleCategorySelect("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className={`btn me-2 ${selectedCategory === "women's clothing" ? "btn-dark" : "btn-white"}`}
              onClick={() => handleCategorySelect("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className={`btn me-2 ${selectedCategory === "jewelery" ? "btn-dark" : "btn-white"}`}
              onClick={() => handleCategorySelect("jewelery")}
            >
              Jewelery
            </button>
          </div>
          <div>
            <button
              className="bg-black btn-outline-dark d-flex align-items-center py-1 px-3"
            >
              <img src="/images/Vector.png" alt="filter" style={{ marginRight: '10px' }} />
              <span className="text-white">Filter</span>
            </button>
          </div>
        </div>
        {filter.map((product) => {
          return (
            <div className="product-card col-md-6 col-lg-4 col-xxl-3 mb-5" key={product.id}>
              <div className="card text-center p-4" >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="280px"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title mt-2">
                  {product.title.substring(0, 12)}
                </h5>
                <div className="d-flex justify-content-between mt-3">
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Shop Now
                  </NavLink>
                  <p className="card-text lead fw-bold">${product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">New Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
