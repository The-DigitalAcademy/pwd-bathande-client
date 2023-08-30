import React from "react";
import './PromoItem.css'

const PromoItem = ({backgroundColor, image, header, name, priceText}) => {
  return (
    <div className="promoItem" style={{backgroundColor: backgroundColor ? backgroundColor : '#000000', color: 'white'}}>
      <img
        src={image ? image : "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
        alt=""
      />
      <div className="promoItem-details">
        <div className="promoItem-header">{header ? header : 'Promotion'}</div>
        <div class="promoItem-name">{name ? name : 'Findout more about our promo'}</div>
        <div class="amount-remaining">{priceText ? priceText : 'Good prices'}</div>
      </div>
    </div>
  );
};

export default PromoItem;


/**

<PromoItem
  backgroundColor='green'
  image="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  header="Male"
  name="Findout about our male sale"
  priceText="Only R599"
/>

 */