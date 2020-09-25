import React from 'react';
import { NavLink } from 'react-router-dom';
const img_Common = "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"


function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="mx-auto col-10">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>{props.name}
                    <strong className="brand-name">Fixta</strong></h1>
                  <h2 className="my-3">{props.line}</h2>
                  <p className="my-3">{props.para}</p>
                  <div className="mt-3">

                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="image not found"></img>
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
