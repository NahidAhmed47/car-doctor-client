import React from 'react';
import logo from '../../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='md:flex justify-between items-center px-2 py-4'>
            <img src={logo} alt="" />
            <div className='md:flex gap-5 text-lg font-mono font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div>
            <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Header;