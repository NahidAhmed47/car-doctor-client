import React from 'react';
import { FaCalendarAlt, FaBlenderPhone, FaMapMarkerAlt } from "react-icons/fa";
const Contract = () => {
    return (
        <div className='w-full h-[200px] bg-slate-800 rounded-md mb-10 md:mb-20 grid grid-cols-1 md:grid-cols-3 px-8'>
            <div className='text-white flex items-center gap-4'>
                <FaCalendarAlt className='w-6 h-6 text-secondary' />
                <div>
                    <h1 className='font-mono'>We are open monday-friday</h1>
                    <h1 className='text-2xl font-bold font-mono'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='text-white flex items-center gap-4'>
                <FaBlenderPhone className='w-6 h-6 text-secondary' />
                <div>
                    <h1 className='font-mono'>Have a question?</h1>
                    <h1 className='text-2xl font-bold font-mono'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='text-white flex items-center gap-4'>
                <FaMapMarkerAlt className='w-6 h-6 text-secondary' />
                <div>
                    <h1 className='font-mono'>Need a repair? our address</h1>
                    <h1 className='text-2xl font-bold font-mono'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Contract;