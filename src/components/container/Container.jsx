import React, { useEffect, useState } from "react";
import "./container.css";
import axios from "axios";

const Container = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const res = await fetch(
        "https://ecartbackend-production.up.railway.app/products"
      );
      const data = await res.json();
      setProductData(data.product);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  const arr = [
    "Chest",
    "Back",
    "Biceps",
    "Triceps",
    "Shoulder",
    "Thighs",
    "Abs",
  ];
  return (
    <div className="container">
      {productData.length > 0
        ? productData.map((ele) => {
            return (
              <div key={ele._id} className="grid_box">
                <div className="image_div">
                  <img src={ele.image} alt="Image missing" />
                  <p className="product_name">{ele.name}</p>
                </div>
                <div className="flex-col justify-between">
                  <div className="flex justify-between">
                    <p className="font-bold">₹{ele.price}</p>
                    <button className="add_btn">Add</button>
                  </div>
                  <p>{ele.rating}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Container;
