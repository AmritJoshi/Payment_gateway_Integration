import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import donations from './photo.jpeg';
import help from './help.jpg';
import donation from './donation.jpg';
import Paypal from '../utils/Paypal'
import './fl.css';

export default class Donation extends Component{
  
    render(){
        return(
            <div id="fle" >
            <Carousel id="left">
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={donations}
                alt="First slide"
                />
            <Carousel.Caption>
            <h3>Childrens are the future</h3>
             <p>Help them to build a great future.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={help}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Help poor</h3>
            <p>Nobody is gonna take any thing after death so if you have something please help who dont.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={donation}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Donate us</h3>
            <p>Even your small donation can make a big difference in someone's life.</p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Paypal/>
            </div>

        );
    }

}