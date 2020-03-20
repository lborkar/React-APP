import React, { Component } from 'react';
import profilepic from '../img/LB_profile_pic.jpeg';

class Home extends Component{

    render() {
        return (
            
            <div>
            <img src={profilepic} className ="profilepic"></img>
            <p>Hi , I am LAXMI BORKAR and I live in Austin, TX</p>           
            </div>
        )
    }


}

export default Home