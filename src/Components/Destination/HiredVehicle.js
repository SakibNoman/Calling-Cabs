import React from 'react';
import peopleIcon from '../../icons/peopleicon.png';

const HiredVehicle = (props) => {

    //destructuring from props
    const { cab_image, cab_fare, cab_name, cab_capacity } = props.hiredVehicle || {};

    return (
        <>
            <div className="col-3">{<img width="35px" src={cab_image} alt="" />}</div>
            <div className="col-3">{cab_name}</div>
            <div className="col-3"> <img width="20px" src={peopleIcon} alt="" /> {cab_capacity}</div>
            <div className="col-3">{cab_fare}</div>
        </>
    );
};

export default HiredVehicle;