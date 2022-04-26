import React from 'react';

const VolunteerDetails = ({data}) => {
    console.log(data)
    const {name,picture}=data
    return (
        <>
        <div className='relative'>
         
         <img src={picture} className='h-[290px] w-full' alt="" />
         <h1 className='bg-blue-700 py-3 hover:bg-yellow-800 rounded-b-[10px] text-center text-white absolute w-full bottom-0 text-2xl '> {name}</h1> 
      </div>
        </>
        
    );
};

export default VolunteerDetails;