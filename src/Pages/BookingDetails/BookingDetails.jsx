import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const BookingDetails = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/all-bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
                  .then(res=>res.json())
                  .then(data=>{
                        setBookings(data)
                    })
                  .catch(err=>console.log(err));
    },[])
    console.log(bookings)
    return (
        <div>
            <h1 className='text-3xl font-bold font-mono'>Your Booking: <span className='text-secondary'>{bookings.length}</span></h1>
        </div>
    );
};

export default BookingDetails;