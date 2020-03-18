import React, { Component } from 'react';
import profilepic from '../img/LB_profile_pic.jpeg';

class Home extends Component{

    render() {
        return (
            
            <div>
            <img src={profilepic} className ="profilepic"></img>
            <p>Hi , my name is LAXMI BORKAR </p>
               
               <p>I am currenlty working as DATA ENGINNER at ENVERUS
            </p>
            </div>
        )
    }


}

export default Home