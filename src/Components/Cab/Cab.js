import React from 'react';
import './Cab.css';

const Cab = (props) => {
    const { cab_name, cab_image } = props.cab
    return (
        <div>
            <div className="custom-card">
                <div className="d-flex justify-content-center" >
                    <img className="w-50 mt-5" src={cab_image} alt="" />
                </div>
                <div className="d-flex justify-content-center" >
                    <h6 className="cabName" >{cab_name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Cab;