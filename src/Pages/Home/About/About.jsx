import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <section className='grid md:grid-cols-2 my-10 md:my-20 px-3 md:gap-10'>
                <div className='relative'>
                    <div className='w-4/5 h-4/5 overflow-hidden rounded'>
                        <img className='h-[110%] w-[100%]' src={person} alt="" />
                    </div>
                    <img src={parts} className='w-[300px] absolute bottom-0 right-4 border-8 rounded ' alt="" />
                </div>
                <div className='space-y-6'>
                    <h1 className='text-warning font-semibold font-mono text-xl'>About Us</h1>
                    <p className='text-5xl font-bold w-2/3'>We are qualified & of experience in this field</p>
                    <p className='text-slate-400 text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-slate-400 text-sm'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-secondary">Get More Info</button>
                </div>
            </section>
    );
};

export default About;