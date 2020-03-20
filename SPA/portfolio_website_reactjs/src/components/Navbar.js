import React ,{ Component } from 'react';
import Navitem from './NavItem';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        // this.setState({'NavItemId':x},()=>{
        //     document.getElementById(this.state.NavItemActive).classList.add('active');
        // });
    };

    render(){
        return (
            <nav>
                <ul>
                    <Navitem id="Home"  item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem id="About" item="About" tolink="/about" activec={this.activeitem}></Navitem>
                    <Navitem id="Education" item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                    <Navitem id="Skill Set" item="Skill Set" tolink="/skills" activec={this.activeitem}></Navitem>
                    <Navitem id="Contact Inofrmation" item="Contact Inofrmation" tolink="/contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}
export default Navbar
