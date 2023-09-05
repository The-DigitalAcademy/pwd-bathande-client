import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/navbar/Header'
import MyContext from '../../context/MyContext'
const Women = () => {


  const {  addToCart } = useContext(MyContext);

  const [women, setWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/productsWomen')
      .then((data) => data.json())
      .then((data) => setWomen(data.data))
      .catch((error) => console.log(error))

  }, [])

  
  const handleAddToCart = (product) =>
  {
      console.log(product)
      addToCart(product)
  }



  return (
    <div>
      <Navbar />
      <Header />
      <div className="promo-header">Women</div>
      <div class="grid-container">
        {
          women.map((viewwomen, index) => {

            return (

              <div key={index}>
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <div>
                      <img className='w-[400px] h-[300px]' src={viewwomen.Image} />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{viewwomen.name}</h2>
                    <p>R{viewwomen.price}</p>
                    <div className="card-actions justify-end">
                      <button onClick={() => handleAddToCart(viewwomen)} className="btn btn-primary">ADD TO CART</button>
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

export default Women
