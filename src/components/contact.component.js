import React, {Component} from 'react';

export default class Contact extends Component{
    
    render(){
        return(
            <div>
            <div className="jumbotron jumbotron-sm">
                <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="h1">
                    Contact us <small>Feel free to contact us</small></h1>
                </div>
            <form className="form">
            <div className="form-group">
            <label for="fname"className="text-info">First name:</label>
            <input type="text" id="fname" className="form-control" name="fname"onChange={this.onchangeUsername} required/><br></br>
            </div>
            <div className="form-group">
            <label for="lname" className="text-info">Last name:</label>
            <input type="text" id="lname" className="form-control"name="lname" onChange={this.onchangelastname} required/><br></br>
            </div>
            <div className="form-group">
            <label for="email" className="text-info">Email:</label>
            <input type="email" className="form-control" id="email"name="email" onChange={this.onchangeemail}required/><br></br>
            </div>
            <div className="form-group">
            <label for="amount"  className="text-info">Drop a message</label>
                <input
                type='text' className="form-control" style={{height:"300px"}}
                onChange={this.myChangeHandler} required
                /><br></br>
            </div>
                <div>
                    <input type="submit" placeholder="submit"></input>
                </div>
            </form>
            </div>
             </div>
            </div>
            
            </div>

        );
    }

}