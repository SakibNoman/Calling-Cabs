import React from 'react';
import fakeData from '../../fakeData.json';
import Cab from '../Cab/Cab';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="home d-flex flex-wrap justify-content-center align-items-center" >
                {
                    fakeData.map(cab => <Cab key={cab.cab_id} cab={cab} ></Cab>)
                }
            </div>
        </>
    );
};

export default Home;