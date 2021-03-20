import React from 'react';

const HiredVehicle = (props) => {
    const { cab_image, cab_fare, cab_name, cab_capacity } = props.hiredVehicle;
    return (
        <>
            <div className="col-3">{<img width="35px" src={cab_image} alt="" />}</div>
            <div className="col-3">{cab_name}</div>
            <div className="col-3">{cab_capacity}</div>
            <div className="col-3">{cab_fare}</div>
        </>
    );
};

export default HiredVehicle;