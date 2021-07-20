import React, {Component} from 'react';
import { Link } from 'react-router-dom';
  
export default class Nav extends Component{
        
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light collapseOnSelect">
            <Link to="/" className="navbar-brand">Kampfire.org</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">HomePage</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/donate" className="nav-link">Donate</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Contact us</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }

}