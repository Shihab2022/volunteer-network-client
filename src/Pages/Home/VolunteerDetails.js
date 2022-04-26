import React from 'react';

const VolunteerDetails = ({data}) => {
    console.log(data)
    const {name,picture}=data
    return (
        <div>
         
           <img src={picture} className='h-[290px] w-full' alt="" />
           <h1> {name}</h1> 
        </div>
    );
};

export default VolunteerDetails;