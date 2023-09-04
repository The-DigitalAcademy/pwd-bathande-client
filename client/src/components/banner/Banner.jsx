import React from "react";
import "../banner/Banner.css";

const Banner = () => {
  return (
    <div>
    
      <div className="banner mx-auto">
        <div className="card card-compact ml-7 mt-1 rounded box bg-base-100 shadow-x3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </figure>

          <div>
        <span className="newWord">Welcome to Neighborhood Market</span>
      </div>
      
        </div>
      </div>
    </div>
  );
};
export default Banner;
