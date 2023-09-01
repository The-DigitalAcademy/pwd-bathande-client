import React, { useContext, useState } from "react";
import MyContext from "../../../Context/MyContext";
import { useNavigate } from "react-router-dom";
import '../Login/Login.css'

function NeighborhoodLogini() {
  const data = useContext(MyContext);

  console.log(data)


  const [usernameT, setUsernameT] = useState("");
  const [passwordT, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsernameT(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function Login() {

    console.log(first)

    
  }

  return (
  <div className="Background">

  
    <form>
      <h6>Login</h6>
      <div className="container-card">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          defaultValue={usernameT}
          onChange={handleUsernameChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          defaultValue={passwordT}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={Login}>
        Submit
      </button>
      <br /><br />
     <a href="/register" className="word">Have an account?</a>
    </form>
    </div>
  );
}

export default NeighborhoodLogini;
