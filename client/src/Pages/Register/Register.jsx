import React from "react";
import "../../Pages/Register/Register.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/Header";
const Register = () => {
  return (
    
    <div className="background">
         <Navbar />
      <Header />
      <form className="forms">
        <h6>Register</h6>
        <div className="container-card">
          <label htmlFor="exampleInputName">Your name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            defaultValue={""}
            onChange={""}
          />
        </div>
        <div className="container-card">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            defaultValue={""}
            onChange={""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            defaultValue={""}
            onChange={""}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={""}>
          Submit
        </button>
        <br />
        <a href="/login" className="words">
          Do you have an account?
        </a>
      </form>
    </div>
  );
};

export default Register;
