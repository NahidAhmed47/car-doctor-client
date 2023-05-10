import React from "react";
import Header from "../Shared/Header/Header";
import loginImg from '../../assets/images/login/login.svg'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex flex-col md:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-3">Don't have an account? Please <Link className="text-secondary hover:underline" to='/sign-up'>Sign up</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
