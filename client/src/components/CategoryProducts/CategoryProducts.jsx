import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "../data";
import Product from '../components/Product'

const CategoryProducts = () => {
  const { name } = useParams();

  console.log(name)


  const [products, setProducts] = useState([]);

  useEffect(() => {

    let p = data.filter((product) => product.category === name);

    setProducts(p);
  }, []);

  return (
    <div className="categoryPoducts">
      <div className="header">Category{name}</div>
      <div className="products">
        {products?.map((product) => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default CategoryProducts;
