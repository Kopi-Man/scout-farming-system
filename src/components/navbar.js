import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as navbar from '../CSS/Nav.module.css';


class Navbar extends Component {
    state = {  }
    render() { 
         return (<div className={navbar.navpage}>
        <div className={navbar.topbar}>
             <img src="leaf.png" alt="log" className={navbar.img}/>
        
                 <span className={navbar.sfsspan}>
                    <Link to="/" className={`${navbar.toplink} ${navbar.sfslink}`}>
                       Farm Scout System
                    </Link>
                </span>
                   
                  <li className={navbar.topli}>
                    <Link to="/" className={navbar.toplink}>
                      <span className={navbar.menui}>&#151;</span>
                      <span className={navbar.menui}>&#151;</span>
                      <span className={navbar.menui}>&#151;</span>
                    </Link>
                 </li> 
           </div>
         
           </div> );
    }

    
    
}


export default Navbar;