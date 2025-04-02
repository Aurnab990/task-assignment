import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Allbatches from '../AllBatches/Allbatches';
import Content from '../../layouts/ContentPage/Content';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Allbatches></Allbatches>
            {/* <Content /> */}
        </div>
    );
};

export default Home;