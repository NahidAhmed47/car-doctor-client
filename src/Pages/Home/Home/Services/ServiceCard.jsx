import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {price, img, title} = service;
    return (
        <div className='p-5 rounded shadow'>
            <img className='max-h-[200px] mx-auto w-full rounded' src={img} alt="" />
            <div className='mt-5 mb-2 flex justify-between items-end'>
                <div>
                    <h3 className='text-2xl font-mono font-semibold'>{title}</h3>
                    <p className='text-base text-secondary font-mono font-medium'>${price}</p>
                </div>
                    <FaArrowRight className='text-secondary font-mono' />
            </div>
        </div>
    );
};

export default ServiceCard;