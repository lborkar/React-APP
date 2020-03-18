import React, { Component } from 'react';
 //imports the “Link” class from the “react-router-dom” module.acts just like the “Anchor <a>” tag in HTML.
 import { Link } from "react-router-dom";

 class Naviten extends Component{
     render(){
         return (
             <li id={this.props.item}>
                 <Link to={this.props.tolink} onClick={this.props.activec.bind(this, this.props.item)}>
                     {this.props.item}
                 </Link>
             </li>
         )
     }
 }

 export default Naviten
 