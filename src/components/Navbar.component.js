import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render(){

        const mystyle = {
            paddingInline: "40px",
            borderRadius:"10px",
            margin:"5px",


          };
        return (
        
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={mystyle}>
            <Link to="/" className="navbar-brand">JobEasy</Link>
            <div class="container-fluid">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Jobs</Link>
              </li>
              <li className="navbar-item">
              <Link to="/postJob" className="nav-link">Post a Listing</Link>
              </li>
              <li className="navbar-item">
              <Link to="/resources" className="nav-link">Resources</Link>
              </li>
              <li className="navbar-item">
              <Link to="/login" className="nav-link">LogIn/SignUp</Link>
              </li>
              </ul>
             
              <Link to="/profile" type="button" class="btn btn-outline-primary">Profile</Link>
            
            
            
            </div>
          </nav>
        );
    }

}