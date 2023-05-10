import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleFormData = (e)=>{
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            Swal.fire({
                title: 'Success!',
                text: 'Successfully signed up',
                icon: 'success'
              })
              form.reset();
              navigate('/', {replace: true});
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <p className="text-center mt-3">Already have an account? Please <Link className="text-secondary hover:underline" to='/login'>Log in</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;