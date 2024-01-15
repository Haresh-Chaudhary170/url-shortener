import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

function ProductSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = [
      {
        image: "product1.png",
        title: "Cacti Plant",
        price: "19.99",
      },
      {
        image: "product2.png",
        title: "Cactus Plant",
        price: "11.99",
      },
      {
        image: "product3.png",
        title: "Aloe Vera Plant",
        price: "7.99",
      },
      {
        image: "product4.png",
        title: "Succulent Plant",
        price: "5.99",
      },
      {
        image: "product5.png",
        title: "Succulent Plant",
        price: "10.99",
      },
      {
        image: "product6.png",
        title: "Green Plant",
        price: "8.99",
      },
    ];
    setData(fetchedData);
  }, []);

  return (
    <div className="mx-28 mt-14">
      <div className="pt-16 px-10 pb-12">
        <h1 className="text-4xl font-bold text-center leading-[140%] pb-12">
          Check out our
          <br />
          products
        </h1>
        <p className="text-gray-600 text-center pb-14 px-56 text-lg">
          Here are some selected plants from our showroom, all are in excellent
          shape and has a long life span. Buy and enjoy best quality.
        </p>
        <div className="grid grid-cols-3 gap-10">
          {data &&
            data.map((item) => (
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
