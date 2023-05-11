import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
const Header = () => {
    const {user, LogOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        LogOut()
        .then(()=>{

        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className='md:flex justify-between items-center px-2 py-4'>
            <img src={logo} alt="" />
            <div className='md:flex gap-5 text-lg font-mono font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user? (
                        <>
                        <NavLink to='/all-bookings'>All Bookings</NavLink>
                        <NavLink to='/' onClick={handleLogOut}>Logout</NavLink>
                        </>
                    ) : (
                        <NavLink to='/login'>Login</NavLink>
                    )
                }
            </div>
            <div>
            <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Header;