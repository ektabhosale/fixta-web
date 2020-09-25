import React from 'react';
import Card from './Card'
import Cdata from './data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const img_mobile="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

function Services() {
  return (
    <>
      <div className="my-5" >
        <h1 className="text-center font-weight-bold">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10  mx-auto">
            <div className="row gy-4">
              {/* <div className="col-md-4 col-10 mx-auto"> */}

                {
                  Cdata.map((val, index) => {
                    return <Card
                      imgsrc={val.imgsrc}
                      title={val.title}
                    />
                  })
                }

              {/* </div> */}

            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Services;
