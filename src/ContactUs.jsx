import React from 'react';


function ContactUs() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div class="form-group">
                <label for="exampleInputName1">Full Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
              </div>
              <div class="form-group">
                <label for="exampleInputPhone1">Phone</label>
                <input type="phone" class="form-control" id="exampleInputPhone1" />
              </div>
              <div class="form-group">
                <label for="exampleInputMessage1">Enter Message</label>
                <input type="text" class="form-control" id="exampleInputMessage1" />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default ContactUs;
