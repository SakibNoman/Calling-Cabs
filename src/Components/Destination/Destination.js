import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';
import './Destination.css';
import HiredVehicle from './HiredVehicle';
import MyMap from './MyMap';

const Destination = () => {

    const { vehicle } = useParams();

    const hiredVehicle = fakeData.find(each => each.cab_name === vehicle);


    const [location, setLocation] = useState({
        pickFrom: '',
        pickTo: '',
        time: ''
    })
    const [isSearched, setIsSearched] = useState(false)

    const inputHandler = (e) => {
        const newLocation = { ...location };
        newLocation[e.target.id] = e.target.value;
        setLocation(newLocation);
    }

    return (
        <div className="row mx-auto" >
            <div className="col-md-4">
                <div className="container" >
                    {!isSearched && <form className=" Custom-cart container p-4 mt-5"  >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Pick from</label>
                            <input onBlur={inputHandler} required type="text" className="form-control" id="pickFrom" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Pick to</label>
                            <input onBlur={inputHandler} required type="text" className="form-control" id="pickTo" />
                        </div>
                        <div className="form-group row">
                            <div className="col-10">
                                <input onBlur={inputHandler} className="form-control" id="time" type="date" />
                            </div>
                        </div>
                        <button onClick={() => isSearched ? setIsSearched(false) : setIsSearched(true)} type="submit" className="btn btn-primary btn-block">Search</button>
                    </form>}
                    {
                        isSearched && <form className=" Custom-cart container p-4 mt-5 d-flex flex-column justify-content-center"  >
                            <div className="routeName row mx-0 d-flex justify-content-around align-baseline align-items-center">
                                <col-6>
                                    <div className="timeline">
                                        <div className="content1">
                                            <h6>{location.pickFrom}</h6>
                                        </div>
                                        <div className="content2">
                                            <h6>{location.pickTo}</h6>
                                        </div>
                                    </div>
                                </col-6>
                                <col-6 >
                                    <h5>Date: {location.time}</h5>
                                </col-6>
                            </div>
                            <div className="row mx-0 container routeName" >
                                <HiredVehicle hiredVehicle={hiredVehicle} ></HiredVehicle>
                            </div>
                            <div className="row mx-0 container routeName" >
                                <HiredVehicle hiredVehicle={hiredVehicle} ></HiredVehicle>
                            </div>
                            <div className="row mx-0 container routeName" >
                                <HiredVehicle hiredVehicle={hiredVehicle} ></HiredVehicle>
                            </div>
                        </form>
                    }
                </div>
            </div>
            <div className="col-md-8 d-flex justify-content-center my-5">
                <MyMap></MyMap>
            </div>
        </div>
    );
};

export default Destination;