import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/navbar/Header'
const Women = () => {

  const [women, setWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/productsWomen')
      .then((data) => data.json())
      .then((data) => setWomen(data.data))
      .catch((error) => console.log(error))

  }, [])


  return (
    <div>
      <Navbar />
      <Header />
      <div class="grid-container">
        {
          women.map((viewwomen, index) => {

            return (

              <div key={index}>
                {
                  console.log(viewwomen)
                }

                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <div>
                      <img className='w-[400px] h-[300px]' src={viewwomen.thumbnail} />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{viewwomen.title}</h2>
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

export default Women
