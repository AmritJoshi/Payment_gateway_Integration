import React, {Component} from 'react';
import donation from './donations.jpg';
import './img.css'
export default class HomePage extends Component{
    
    render(){
        return(
            <div>
                <img src={donation} className="img" alt="logo" />
                <div class="card-body">
    <           h5 class="card-title">Make Donation For a Cause</h5>
                <p class="card-text">It does not matter how much we donate; it matters whether the donation is meaningful. How to define meaningful? Let society and history judge.</p>
                <a href="/donate" class="btn btn-primary">Donate</a>
            </div>
            </div>
        
        );
    }

}
