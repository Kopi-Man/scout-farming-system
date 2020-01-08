import React,{Component} from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';
import { RSA_NO_PADDING } from 'constants';

class Farm extends Component{
     
   
     render(){
     
         return(<div>
           <div style={styDiv}><Link to="/home" style={styBtn}>Back</Link></div>

               <div className={navbar.farmType}>
             <div className={`${navbar.farmTypeIcon} ${navbar.longTerm}`}>
               <Link className={navbar.farmLink} to="/long">
               <img src="longTerm.png"   height="200" width="200px"/>
                <h3 className={navbar.farmTitle}>long term</h3>
               </Link>
              </div>

              <div className={`${navbar.farmTypeIcon} ${navbar.shortTerm}`}>
               <Link to="/short">
               <img src="shortTerm.png"   height="200" width="200px"/>
                <h3 className={navbar.farmTitle}>short term</h3>
               </Link>
              </div>

              <div className={`${navbar.farmTypeIcon} ${navbar.liveStock}`}>
               <Link to="/live">
               <img src="liveStock.png"   height="200" width="200px"/>
                <h3 className={navbar.farmTitle}>Live Stock Farm</h3>
               </Link>
              </div>

              <div className={`${navbar.farmTypeIcon} ${navbar.poultry}`} >
               <Link to="/poultry">
               <img src="poultry.png"   height="200" width="200px"/>
                <h3 className={navbar.farmTitle}>Poultry Farm</h3>
               </Link>
              </div>
              </div>
         </div>

         );
     }
}
  const styBtn={
       color:'white',
       textDecoration:'none',
       background:'black',
      padding:'5px 15px',
      borderRadius:'10px',
      border:'2px solid blue'};

const styDiv={
     marginTop:'10px',
     marginRight:'5px'
};

export default Farm;