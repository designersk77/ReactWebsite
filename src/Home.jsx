import React from 'react';
import { NavLink } from 'react-router-dom';
import Homeimg from '../src/assets/images/homepage-img.png';
import Common from './Common';

const Home = () => {
  return (
    <>
        <Common
            name="Grow your business with"
            imgsrc={Homeimg}
            visit="/service"
            btname="Get Started"
        />
    </>
  );
}

export default Home;
