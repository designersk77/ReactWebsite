import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const Service = () => {
  return (
    <>
      <div className="container-fluid nav-bg pt-3">
        <div classNamer="row">
          <div className="col-12 text-center">
            <h1> Our Services</h1>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-12 col-md-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map ((val, ind) => {
                  return <Cards
                  key={ind} 
                  imgsrc={val.imgsrc}
                  title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
