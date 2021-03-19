import React from 'react';
import { Link } from 'react-router-dom';
import './Cab.css';

const Cab = (props) => {
    const { cab_name, cab_image } = props.cab
    return (
        <Link to={`/destination/${cab_name}`} >
            <div className="custom-card">
                <div className="d-flex justify-content-center" >
                    <img className="w-50 mt-5" src={cab_image} alt="" />
                </div>
                <div className="d-flex justify-content-center" >
                    <h6 className="cabName" >{cab_name}</h6>
                </div>
            </div>
        </Link>
    );
};

export default Cab;