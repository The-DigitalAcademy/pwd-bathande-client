import React from "react";
import MyContext from './MyContext'

function ContextState({children}){
    const data = [
        {id: 1, username: 'neighborhoodmarket01@gmail.com',Email:'123456'}
    ]
    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextState