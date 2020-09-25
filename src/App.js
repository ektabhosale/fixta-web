import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ContactUs from './ContactUs';
import Services from './Services';
import Navbar from './Navbar';
import About from './About';


function App() {
  return (
    <>
    
    <Navbar/>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/contact" exact component={ContactUs}/>
     <Route path="/about" exact component={About}/>
     <Route path="/services" exact component={Services}/>
     <Redirect to="/"/>
   </Switch>
   
    </>
  );
}

export default App;
