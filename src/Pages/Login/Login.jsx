import React, { useContext, useState } from "react";
import Header from "../Shared/Header/Header";
import loginImg from '../../assets/images/login/login.svg'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    const handleFormData = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
          fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: result.user.email
            })
          })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('token', data.token);
            Swal.fire({
              title: 'Success!',
              text: 'Successfully signed in',
              icon: 'success'
            })
            form.reset();
            navigate(from, {replace: true});
            })
        })
        .catch(error => {
            setError(error.message);
        })
    }
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex flex-col md:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p className='text-secondary text-sm pt-2 text-center'>{error}</p>
            <form className="card-body" onSubmit={handleFormData}>
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
