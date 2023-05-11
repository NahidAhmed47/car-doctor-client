import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const BookService = () => {
  const data = useLoaderData();
  const {price, service_id, title, img} = data;
  const {user} = useContext(AuthContext);
  const handleBookData = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const order = {
        customerName: name,
        img,
        title,
        email,
        date,
        price
    }
    fetch(`http://localhost:5000/book-details`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
          <div className="card-body my-20">
            <form onSubmit={handleBookData}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="date"
                className="input input-bordered"
                name="date"
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
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered"
                name="price"
                defaultValue={'$'+price}
              />
            </div>
            </div>
              <button className="btn btn-primary btn-block mt-10">Book Now</button>
            </form>
          </div>
  );
};

export default BookService;
