import React from 'react'
import '../Auth/Register.css'

const Register = () => {
  return (
    <div className="background">
      <form className="forms">
        <h6>Register</h6>
        <div className="container-cardz">
          <label htmlFor="exampleInputName">Your name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            value={""}
            onChange={""}
          />
        </div>
        <div className="container-cardz">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={""}
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
            value={""}
            onChange={""}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={''}>
          Submit
        </button>
        <br />
        <a href="/login" className="words">Do you have an account?</a>
      </form>
    </div>
  )
}

export default Register