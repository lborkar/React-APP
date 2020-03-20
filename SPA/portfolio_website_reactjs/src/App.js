import React from 'react';
import './App.css';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';



function App() {

    return(
        <Router>
            <div className ="App">
            <Navbar></Navbar> 
            
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About></About>
            </Route>
            </div>
        </Router>
    )
}

export default App;
