
import React, { useState, useEffect } from "react";
import MyContext from "../context/MyContext";

function ContextState({ children }) {
  // for login
  const data = [{ id: 1, username: "bathande@gmail.com", Email: "1234" }];

  //get value
  const [cart, setCart] = useState([]);

  //use state for get value from local storage
  const [local, setLocal] = useState(null);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //store into local storage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(cart));
  }, []);

  useEffect(() => {
    const storedValue = localStorage.getItem("key");

    if (storedValue !== null) {
      setLocal(storedValue);
    }
  }, []);

  // const removeFromCart = (itemId) => {
  //   const updatedCart = cart.filter((item) => item.id !== itemId);
  //   setCart(updatedCart);
  // };

  return (
    <MyContext.Provider
      value={{
        data,
        cart,
        addToCart,
        // removeFromCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextState;
