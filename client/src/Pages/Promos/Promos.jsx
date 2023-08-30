import React from "react";
import "../Promos/Promo.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/Header";
import PromoItem from "./PromoItem/PromoItem";

const Promos = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Female
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Male
        </div>
      </div>
    </div>
  );
};

export default Promos;
