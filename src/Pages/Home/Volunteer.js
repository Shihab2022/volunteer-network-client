import React from 'react';
import useVolunteerData from '../../Hook/VolunteerData';
import VolunteerDetails from './VolunteerDetails';

const Volunteer = () => {
    const [volData]=useVolunteerData()
    // console.log(volData)
    return (
        <div className="grid grid-cols-4 gap-8 my-5">
           {
               volData.map(data => <VolunteerDetails key={data.id} data={data}></VolunteerDetails>)
           }
          
        </div>
    );
};

export default Volunteer;