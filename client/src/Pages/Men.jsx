import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/navbar/Header'
import './Men.css'

const Men = () => {

    const [men, setMen] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/productsMen')
            .then((data) => data.json())
            .then((data) => setMen(data.data))
            .catch((error) => console.log(error))

    }, [])


    return (
        <div>
            <Navbar />
            <Header />
            <div className="promo-header">Men</div>
            <div class="grid-container">
                {
                    men.map((viewmen, index) => {

                        return (

                            <div key={index}>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <div>
                                            <img className='w-[400px] h-[300px]' src={viewmen.Image} />
                                        </div>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{viewmen.name}</h2>
                                        <p>R3000</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }

            </div>
        </div>

    )
}

export default Men

