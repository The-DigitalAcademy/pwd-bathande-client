import React from 'react'
import MyContext from './MyContext'

function ContextState({children}) {

  const data = [
    {id: 1, username: 'bathande@gmail.com', Email: '1234'}
  ]

  return (
    <MyContext.Provider value={data}>
         {children}
    </MyContext.Provider>
  )
}

export default ContextState
