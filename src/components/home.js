import React, {Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import *as navbar from '../CSS/Nav.module.css';


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
           <div className={navbar.homeItem1}>
                <div className={`${navbar.homeIconContent1} ${navbar.icon01}`}> 
                    <Link to="/map" className="menu-nav" href="map.js">
                     <img src="googleMap.png"  height="200" width="200px"/>
                     <p className={navbar.homeText}>location</p>
                    </Link>
                </div>
                
                 <div className={`${navbar.homeIconContent1} ${navbar.icon01}`}>
                     <Link to="/report">
                     <img src="report.png"   height="200" width="200px"/>
                     <p className={navbar.homeText}>Report</p>
                    </Link>
                </div>

                <div className={`${navbar.homeIconContent1} ${navbar.icon01}`}>
                    <Link to="/map" className="menu-nav" href="map.js">
                     <img src="recent.png"   height="200" width="200px"/>
                     <p className={navbar.homeText}>Recently</p>
                     </Link>
                   
                </div>
            </div>

                   

            <div className={navbar.homeItem2}>
                <div className={navbar.homeIconContent2}> 
                    {/*<a className="menu-nav" href="">*/}
                    <Link to="/emp">
                     <img src="employee2.png"   height="200" width="200px"/>
                     <p className={navbar.homeText}>Employee</p>
                     </Link>
                   {/* </a> */}
                </div>
                
                 <div className={navbar.homeIconContent2}>
                 <Link to="/map" className="menu-nav" href="map.js">
                     <img src="travel.jpg"  height="200" width="200px"/>
                     <p className={navbar.homeText}>Path view</p>
                    </Link>
                </div>

               {/* <div className={navbar.homeIconContent2}>
                     <a className="menu-nav" href="">
                     <img src="setting.png"   height="200" width="200px"/>
                     <p className={navbar.homeText}>Settings</p>
                    </a>
               </div>*/}
            </div>
        </div>
         );
    }
}
 
export default HomePage;