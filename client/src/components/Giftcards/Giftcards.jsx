import React from 'react'
import "../Giftcards/Giftcard.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/Header";

const Giftcards = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div class='container-giftcard'>
        <article class="gift-card" id='gift_now'>
          <div class="gift-card__image">
            <img src="https://gloryglamproducts.co.za/wp-content/uploads/2023/04/gloryglam_voucher_image.png" alt="" />
          </div>
          <section class="gift-card__content">
            <div class="gift-card__amount">Reward</div>
            <div class="gift-card__amount-remaining">R50 Remaining</div>
            <div class="gift-card__code">645D 4353 FF77 DFG8</div>
            <div class="gift-card__msg">Use this code at checkout to redeem your gift card</div>
           </section>
         </article>
       </div>

     </div>
  )
}

export default Giftcards
