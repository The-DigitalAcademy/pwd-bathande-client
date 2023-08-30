import React from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/navbar/Navbar";
import Header from "../components/navbar/Header";
import ProductNewArrivals from "../Data/ProductNewArrivals";

function NewArrivals() {
  return (
    <div>
      <Navbar />
      <Header />

      {ProductNewArrivals.map((card,(index) => (
          <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={Card.Image} className="" alt="..." />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/list/${card.name}`}>
                <button className="btn btn-primary">Buy Now</button>
                </Link>
                
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NewArrivals;
