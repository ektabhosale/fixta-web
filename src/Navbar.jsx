import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg ">
            <NavLink exact className=" menu-main " to="/">Fixta</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto menu-other">

                <NavLink exact activeClassName="menu-active" className="nav-link menu-other" to="/">Home <span class="sr-only">(current)</span></NavLink>
                <NavLink exact activeClassName="menu-active" className="nav-link menu-other" to="/services">Services</NavLink>
                <NavLink exact activeClassName="menu-active" className="nav-link menu-other" to="/contact">Contact us</NavLink>
                {/* <NavLink exact activeClassName="menu-active" className="nav-link menu-other" to="/workflow" >Work flow</NavLink> */}
                <NavLink exact activeClassName="menu-active" className="nav-link menu-other" to="/about" >About us</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </>

  )
}
export default Navbar;
