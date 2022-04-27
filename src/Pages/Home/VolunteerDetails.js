import React, { useEffect, useState } from 'react';

const VolunteerDetails = ({data}) => {
    const {name,picture}=data
const [rgb,setRgb]=useState('')
  
    useEffect(() => {
        const a=Math.floor(Math.random()*255)
        const b=Math.floor(Math.random()*255)
        const c=Math.floor(Math.random()*255)
        const rgbColor=`rgb(${a},${b},${c})`
        setRgb(rgbColor)

    },[])

    return (
        <>
   
        <div className='relative'>
         <img src={picture} className='h-[290px] w-full' alt="" />
         <h1     style={{ backgroundColor: `${rgb}` }}      className=' py-3 hover:bg-yellow-800 rounded-b-[10px] text-center text-white absolute w-full bottom-0 text-2xl '> {name}</h1> 
      </div>
   
  
        </>
        
    );
};

export default VolunteerDetails;