import React, { createContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData.json';
import Cab from '../Cab/Cab';
import './Home.css';

export const CabContext = createContext()

const Home = () => {

    const [allCabs, setAllCabs] = useState([]);

    useEffect(() => {
        setAllCabs(fakeData);
    }, [allCabs])

    return (
        <CabContext.Provider value={[allCabs, setAllCabs]} >
            <div className="home d-flex flex-wrap justify-content-center align-items-center" >
                {
                    allCabs.map(cab => <Cab key={cab.cab_id} cab={cab} ></Cab>)
                }
            </div>
        </CabContext.Provider>
    );
};

export default Home;