import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from './Services/Services';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            {/* About us section */}
            <About></About>
            {/* Services section */}
            <Services></Services>
        </div>
    );
};

export default Home;