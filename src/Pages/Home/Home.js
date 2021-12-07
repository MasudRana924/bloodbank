import React from 'react';
import Banner from './Banner/Banner';
import Clients from './Clients/Clients';
import Donars from './Donars/Donars';
import Donate from './Donate/Donate';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Donars></Donars>
            <Clients></Clients>
            <Reviews></Reviews>
            <Donate></Donate>
        </div>
    );
};

export default Home;