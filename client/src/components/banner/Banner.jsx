import React from "react";
import "../banner/Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container">
        {/* <h1 className="market">Welcome to Neighborhood Market</h1> */}
      </div>
      <div className="card">
        <div className="card card-compact w-95 rounded box h-15 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
export default Banner;
