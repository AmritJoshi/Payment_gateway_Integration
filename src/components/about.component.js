import React, {Component} from 'react';
import './decorate.css';
//import donations from './donations.jpg';
import food from './Food-distribution.jpg'
import clothes from './clothing-donation.jpg'; 
import blood from './blood.jpg';
export default class About extends Component{
    
    render(){
        return(
            <div>
<div class="header">
  <h2>Our organizations Basic functionalities.</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Food Donation Programmes</h2>
      <h5>Food Donations , 2020/2021</h5>
      <div class="fakeimg" style={{height:"200px;"}}><img src={food} style={{width:"870px"}} alt="food distribution"/></div>
      <p>In this pandamic situations our organization provided food to the needy peoples who are not able to go to their work in this situation to earn their daily needs.</p>
    </div>
    <div class="card">
      <h2>Chothes Donation Programmes</h2>
      <div class="fakeimg" style={{height:"200px;"}}><img src={clothes} style={{width:"870px"}} alt="food distribution"/></div>
      <p>Our organization also collects old or new clothes from the peoples who want to give it away and provide them to the needy peoples. If you want to provide clothes you can contact us in contact us field of navigation bar.</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>Blood Donations</h2>
      <div class="fakeimg" style={{height:"100px;"}}><img src={blood} style={{width:"220px"}} alt="food distribution"/></div>
      <p>We conduct several blood donation Programmes in schools colleges or health institutions and we provide the blood during the time of need for needy peoples.</p>
    </div>
  </div>
</div>
</div>
        );
    }

}