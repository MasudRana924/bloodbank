import React from 'react';
import Banner from './Banner/Banner';
import Clients from './Clients/Clients';
import Contact from './Contact/Contact';
import Donars from './Donars/Donars';
import Donate from './Donate/Donate';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Donars></Donars>
            <Clients></Clients>
            <Donate></Donate>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;