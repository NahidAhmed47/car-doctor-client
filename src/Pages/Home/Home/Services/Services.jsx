import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mb-10 md:mb-20'>
            <div className='text-center w-full'>
                <h3 className='text-secondary text-xl font-mono font-semibold'>Services</h3>
                <h3 className='text-4xl font-bold'>Our Service Area</h3>
                <p className='text-sm text-slate-500 my-2 max-w-[550px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mt-8'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='w-full text-center mt-8'>
                <button class="btn btn-outline btn-secondary ">More Services</button>
            </div>
        </div>
    );
};

export default Services;