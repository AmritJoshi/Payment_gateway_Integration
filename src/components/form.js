import React from 'react'

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname:null,
            lname:null,
            email:null,
            amount: '' };
      }
      myChangeHandler = (event) => {
        this.setState({amount: event.target.value});
      }
      onchangeUsername=(event)=>{
          console.log(event)
          console.log(event.target.name)
          console.log(event.target.value)
          this.setState({
              fname:event.target.value
          })
      }
      onchangelastname=(event)=>{
          console.log(event.target.name)
          console.log(event.target.value)
          this.setState({
            lname:event.target.value
        })
      }
      onchangeemail=(event)=>{
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            email:event.target.value
        })
    }
    render(){
        return(
            <div >
            <h3 style={{paddingLeft:"70px"}}>Please Donate</h3>
            <form className="form">
            <div className="form-group" style={{paddingLeft:"30px"}}>
            <label for="fname" style={{paddingLeft:"30px"}} className="text-info">First name:</label>
            <input type="text" id="fname" className="form-control" name="fname" style={{width:"300px",paddingLeft:"30px"}} onChange={this.onchangeUsername} required/><br></br>
            </div>
            <div className="form-group" style={{paddingLeft:"30px"}}>
            <label for="lname" className="text-info" style={{paddingLeft:"30px"}}>Last name:</label>
            <input type="text" id="lname" className="form-control" style={{width:"300px",paddingLeft:"30px"}} name="lname" onChange={this.onchangelastname} required/><br></br>
            </div>
            <div className="form-group" style={{paddingLeft:"30px"}}>
            <label for="email" className="text-info" style={{paddingLeft:"30px"}} >Email:</label>
            <input type="email" className="form-control" id="email"  style={{width:"300px",paddingLeft:"30px"}} name="email" onChange={this.onchangeemail}required/><br></br>
            </div>
            <div className="form-group" style={{paddingLeft:"30px"}}>
            <label for="amount" className="text-info" style={{paddingLeft:"30px",paddingLeft:"30px"}}>Amount:</label>
                <input
                type='number' className="form-control" style={{width:"300px",paddingLeft:"30px"}}
                onChange={this.myChangeHandler} required
                /><br></br>
            </div>
                
            </form>
        
            {/* <Paypal
                toPay={this.state.amount}
                onSucess={transactionSucess}
                transactionError={transactionError}
                fname={this.state.fname}
                lname={this.state.lname}
                email={this.state.email}
            /> */}
            </div>

        );
    }

}