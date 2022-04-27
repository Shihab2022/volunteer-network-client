import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../img/icon.png'
const Header = () => {
    return (
        <div className="md:px-24">
       <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img className="h-14" src={icon} alt="" />
     
    </button>
    <nav className="md:ml-auto flex flex-wrap text-black text-xl font-mono items-center  justify-center">
      <Link to='/home' className="mr-5  hover:text-gray-900">Home</Link>
      <Link to='/' className="mr-5  hover:text-gray-900">Donation</Link>
      <Link to='/' className="mr-5  hover:text-gray-900">Events</Link>
      <Link to='/' className="mr-5  hover:text-gray-900">Blog</Link>
      <Link to='/register' className="mr-5 bg-rose-800  px-4 py-2 rounded-sm text-white hover:text-gray-900">Register</Link>
    </nav>
   
  </div>
</header>     
        </div>
    );
};

export default Header;