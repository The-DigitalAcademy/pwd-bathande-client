// import React, { useState } from 'react'
// import { Link } from "react-router-dom"
// // import Productdata from "../server/Productdata";

// import { useEffect } from 'react'

//  const [women, setWomen] = useState([])

// useEffect(()=>
// {
//     fetch('http://localhost:3000/api/productsWomen')
//     .then((data)=> data.json())
//     .then((data)=> setWomen(data.data))
//     .catch((error) => console.log("test"))

// }, [])

// console.log(women)

// const Women = () => {
//     return (
 
//         <div>
//             <div className='Header_Women'>

//             </div>
//             <h1 className="Sub_header_Women">Women</h1>

//             {
//                 Productdata.map((Product, index) => {
//                     return
//                     (
//                         <div key={index} className="card w-96 bg-base-100 shadow-xl">
//                             <figure className="px-10 pt-10">
//                                 <img src={Product.image} alt="Shoes" className="rounded-xl" />
//                             </figure>
//                             <div className="card-body items-center text-center">
//                                 <h2 className="card-title">{product.name}</h2>
//                                 <p>If a dog chews shoes whose shoes does he choose?</p>
//                                 <div className="card-actions">{product.price}
//                                     <Link to={`/card/${product.name}`}>
//                                         <a href="#" className="btn btn-primary">
//                                             <button className="btn btn-primary">Buy Now</button>
//                                         </a>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })

//             }



//         </div>
//     )
// }

// export default Women

import React from 'react'

const Women = () => {
  return (
    <div>Women</div>
  )
}

export default Women