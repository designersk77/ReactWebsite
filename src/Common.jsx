import React from 'react';
import { NavLink } from 'react-router-dom';
import Homeimg from '../src/assets/images/homepage-img.png';

const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-item-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> {props.name} <strong className="brand-name"> Responsive Website </strong></h1>
                            <h2> We are the team of talented developer making websites </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-outline-primary"> {props.btname} </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                            <img src={Homeimg} className="img-fluid animated" alt="home image" />
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Common;
