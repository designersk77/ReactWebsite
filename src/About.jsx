import React from 'react';
import { NavLink } from 'react-router-dom';
import Homeimg from '../src/assets/images/homepage-img.png';
import Common from './Common';

const About = () => {
  return (
    <>
        <Common
        name="Welcome to About Page"
        imgsrc={Homeimg}
        visit="/contact"
        btname="Contact Now"
        />
    </>
  );
}

export default About;
