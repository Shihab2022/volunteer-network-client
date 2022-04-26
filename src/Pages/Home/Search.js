import React from 'react';

const Search = () => {
    return (
        <div>
            <h1 class='text-center mt-5 text-2xl font-bold text-red-700'>I GROW BY HELPING PEOPLE IN  NEED . </h1> 
    <div class="container md:py-10 flex justify-center items-center">
      
        <div class="relative">
            <div class="absolute top-4 left-3">
                 <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> 
                 </div> 
            <input type="text" class="h-14 w-96 shadow-lg shadow-red-300 pl-10 pr-20 rounded-lg z-0 focus:shadow-lg focus:shadow-red-500 focus:outline-none" placeholder="Search anything..."/>
            <div class="absolute top-2 right-2"> 
            <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
     
    </div>
</div>
        </div>
    );
};

export default Search;