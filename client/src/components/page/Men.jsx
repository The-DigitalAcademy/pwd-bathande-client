import React from 'react'
import { Link } from "react-router-dom"
// import Productdata from "../server/Productdata";
import '../components/Women.jsx'
import { useEffect } from 'react'

 const [men, setMen] = useState([])

useEffect(()=>
{
    fetch('http://localhost:3000/api/productsMen')
    .then((data)=> data.json())
    .then((data)=> setMen(data.data))
    .catch((error) => console.log("test"))

}, [])

console.log(Men)

const Men = () => {
    return (
 
        <div>
            <div className='Header_Men'>

            </div>
            <h1 className="Sub_header_Men">Men</h1>

            {
                Productdata.map((Product, index) => {
                    return
                    (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={Product.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">{product.price}
                                    <Link to={`/card/${product.name}`}>
                                        <a href="#" className="btn btn-primary">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }



        </div>
    )
}



export default Men
