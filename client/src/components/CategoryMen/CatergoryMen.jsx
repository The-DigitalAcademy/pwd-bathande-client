import React from 'react'
import { useParams } from 'react-router-dom'

const CatergoryMen = () => {

    const {id} = useParams()

  return (
    <div>
      {
        id
      }
    </div>
  )
}

export default CatergoryMen
