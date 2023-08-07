/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./products.css";
import styles from "./products.module.css";
import Image from "next/image";

//
//
//

function Products() {
  //
  const router = useRouter();
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetch() {
      const data = await axios.get("https://dummyjson.com/products");
      console.log(data);
      setProducts(data.data.products);
    }
    fetch();
  }, []);

  return (
    <>
      <h3>Products</h3>

      {products?.length > 0 &&
        products.map((item) => {
          return (
            <div
              className="products-container"
              key={item.id}
              onClick={() => {
                router.push(`/product/${item.id}`);
              }}
            >
              <p style={{ padding: "10px" }}>
                title : {item.title} - price : {item.price}
              </p>
              <p className={styles.discount}>
                discount - {item.discountPercentage}
              </p>
              <div className="img">
                <Image
                  width={200}
                  height={200}
                  src={item.images[0]}
                  className={styles.img}
                  alt={item.images[0]}
                />
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Products;