import React, { useState } from 'react';
import './Destination.css';

const Destination = () => {

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
    console.log(isSearched);

    return (
        <div className="row" >
            <div className="col-md-4">
                <div className="container" >
                    {!isSearched && <form className=" Custom-cart container p-4 mt-5"  >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Pick from</label>
                            <input onBlur={inputHandler} type="text" className="form-control" id="pickFrom" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Pick to</label>
                            <input onBlur={inputHandler} type="text" className="form-control" id="pickTo" />
                        </div>
                        <div className="form-group row">
                            <div className="col-10">
                                <input onBlur={inputHandler} className="form-control" id="time" type="date" />
                            </div>
                        </div>
                        <button onClick={() => isSearched ? setIsSearched(false) : setIsSearched(true)} type="button" className="btn btn-primary btn-block">Search</button>
                    </form>}
                    {
                        isSearched && <form className=" Custom-cart container p-4 mt-5"  >
                            <div className="routeName">
                                <div className="timeline">
                                    <div className="content1">
                                        <h6>{location.pickFrom}</h6>
                                    </div>
                                    <div className="content2">
                                        <h6>{location.pickTo}</h6>
                                    </div>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
            <div className="col-md-8">

            </div>
        </div>
    );
};

export default Destination;