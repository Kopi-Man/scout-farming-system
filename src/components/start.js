import React,{Component} from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';

class Start extends Component{
   
     render(){
     
         return(<div>
              <h2 id={navbar.head2}>Feel The Experience</h2>
               
               <img id={navbar.img2}  src="logoSenzAgro.png" height="150" width="150"/>
                   <div className={navbar.foot}>
                       <Link to="/sign" id={navbar.sign}>sign up</Link><br/><br/>
                       <Link to="/login" id={navbar.login} >Login</Link>
                    </div>
         </div>

         );
     }
}

export default Start;