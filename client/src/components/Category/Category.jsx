import React, { useEffect, useState } from "react";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    setUniqueCategory();
  }, []);

  // get unique category
  function setUniqueCategory() {
    // array that going to holds the categories
    let categoryData = [];

    // loop through all the data
    for (let i = 0; i < data.length; i++) {
      // if categery name is not already in the categoryData, add it
      if (!categoryData.includes(data[i].category)) {
        categoryData.push(data[i].category);
      }
    }

    // add all the usique category name in the categoryNames state
    setCategoryNames(categoryData);
  }

  return (
    <div className="category">
      <div className="header">Product Category</div>
      <div className="list-2">
        {categoryNames?.map((name, index) => (
          <Link to={`/category/${name}`} className="item" key={index}>
            {name}
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Category;
