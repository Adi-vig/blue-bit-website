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
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Jobs</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Post a listing</Link>
              </li>
              <li className="navbar-item">
              <Link to="/user" className="nav-link">login/signup</Link>
              </li>
            </ul>
            </div>
          </nav>
        );
    }

}