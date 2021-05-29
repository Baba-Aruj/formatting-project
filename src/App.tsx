import React from 'react';

import { BsPlus } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import './App.css';

function App() {
  return (
    <div className="container pb-5  ps-4 px-4 rounded section1">

      <div className="row mt-3">
        <div className="col-12 mt-4 d-flex  justify-content-between">
           <h1 className="text-light">My Acounts</h1>
           <div className="cl-4">
          <button className="btn btn-pimary border border-ligth text-light mx-3 mt-1 fs-5">SWICH TO TESNET</button>
          <BsGearFill size="2em" color="#fff" className="ms-auto"/>
           </div>
             

        </div>
      </div>
<div className="row mt-5 ">
  <div className="col-sm-6 ">
    <div className="border border-light rounded section2">
      <div className="card-body  d-flex justify-content-center">
       <div className="col-4  d-flex justify-content-center flex-column align-items-center mt-4">
          <BsPlus size="5em" color="#fff"/>
        <h2 className="text-light">Add account</h2>
       </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card section2">
      <div className="card-body">
      <h2 className="card-title mt-2 mb-5">My Bussiness Account </h2>
      <div className="col-md-6 d-flex justify-content-between p-2 fs-5">
      <div className="text">0 <span className="fw-bold">EURT</span></div>
      <div className="text">673.1150 <span className="fw-bold">XLM</span></div>
          </div>

      </div>
    </div>
  </div>
</div>
   
<div className="row mt-4">
  <div className="col-sm-6">
    <div className="card section2">
      <div className="card-body">
      <h4 className="card-title mt-2 mb-5">Personal Safe </h4>
      <div className="col-md-6 d-flex justify-content-between p-2 fs-5">
      <div className="text mb-2">5.9999 <span className="fw-bold">XLM</span></div>

          </div>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-5">
    <div className="card section2">
      <div className="card-body">
        <div className="col-12 d-flex justify-content-end">
        <div className="notfi bg-danger rounded-circle">
        <span className="text-light ms-2">1 </span>

    </div>
        </div>

      <h2 className="card-title mb-4">Discretionary funds </h2>
        <p className="card-text">
          <div className="col-md-10 d-flex justify-content-between p-2 fs-5">
          <div className="text">0.5755 <span className="fw-bold">EURT</span></div>
            <div className="text">0.2299 <span className="fw-bold">USD</span></div>
            <div className="text">673.1150 <span className="fw-bold">XLM</span></div>
          </div>
           
          </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
