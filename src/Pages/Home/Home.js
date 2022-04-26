import React from 'react';
import Search from './Search';
import Volunteer from './Volunteer';

const Home = () => {
    return (
        <div className='md:px-28 mx-10'>
            <Search></Search>
            <Volunteer></Volunteer>
        </div>
    );
};

export default Home;