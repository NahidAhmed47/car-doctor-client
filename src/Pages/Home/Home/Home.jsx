import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from './Services/Services';
import Contract from '../Contract/Contract';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            {/* About us section */}
            <About></About>
            {/* Services section */}
            <Services></Services>
            {/* Contract section */}
            <Contract></Contract>
        </div>
    );
};

export default Home;