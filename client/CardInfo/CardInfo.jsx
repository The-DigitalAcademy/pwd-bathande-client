import React from 'react'
import { useParams } from 'react-router'
import ProductData from '../Data/ProductData'


const CardInfo = () => {

    const {name} = useParams ();

  return (
    <div className="container" >
        {
            ProductData.filter ((card )=> card.name === name ).map ((card,index)=>(
                <div key ={index}>
                    <img src={card.Image} alt= ""/>
                    <h2>{card.name}</h2>
                </div>
            ))
        }

    </div>
  )
}

export default CardInfo