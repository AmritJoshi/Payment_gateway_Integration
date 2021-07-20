import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import emailjs from 'emailjs-com' 
//import Form from '../components/form.js'
import background from '../components/images.jpeg'
export default class Paypal extends React.Component {


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



    render() {
       // const {firstname}=this.state
        function sendemail(e){
            
            emailjs.send('service_99ef9za','template_zlua4lf',{fname:"Amrit",
                                                                lname:"Joshi",
                                                                email:"amritscience2012@gmail.com",
                                                                amount:total}, 'user_b6ZxaaEMMxk5Rh0CCpeBh')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });      
        }
        function successmail(e){
            
            emailjs.send('service_99ef9za','template_jepfy2o',{fname:"Amrit",
                                                                lname:"Joshi",
                                                                email:"amritscience2012@gmail.com",
                                                                amount:total}, 'user_b6ZxaaEMMxk5Rh0CCpeBh')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });      
        }

        const onError = (err) => {
            console.log("Error!", err);
       }
 
        let env = 'sandbox';
        let currency = 'USD';
        let total = this.state.amount;
        const client = {
            sandbox:    'AXEHqNEThd72mtAseenyVDTI0Rn5CegsqNZ16BJmWtmjlOD-rD0Q8RbtOsgx2fWzfXy-F4Q89fIQ8KzO',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        
        return (
            
            <div  style={{width:"380px", backgroundImage:background}} id="right">
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
            <label for="amount" className="text-info" style={{paddingLeft:"30px"}}>Amount:</label>
                <input
                type='number' className="form-control" style={{width:"300px",paddingLeft:"30px"}}
                onChange={this.myChangeHandler} required
                /><br></br>
            </div>
                
            </form>
                <div style={{paddingLeft:"20px"}}>
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={successmail}
             onCancel={sendemail}
             style={{
                 size:'large',
                 color:'blue',
                 shape:'rect',
                 
             }} />
             </div>
             
             </div>
        );
    }
}

