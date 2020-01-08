import React, {Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <div className="menu-item">
                <div className="photo"> 
                    <Link to="map" className="menu-nav" href="map.js">
                     <img src="googleMap.png"  height="200" width="200px"/>
                     <p className="menu-text">location</p>
                    </Link>
                </div>
                
                 <div className="photo">
                     <a className="menu-nav" href="">
                     <img src="calendar4.png"   height="200" width="200px"/>
                     <p className="menu-text">calendar</p>
                    </a>
                </div>

                <div className="photo">
                     <a className="menu-nav" href="">
                     <img src="recent.png"   height="200" width="200px"/>
                     <p className="menu-text">Reacently</p>
                    </a>
                </div>
            </div>

                   

            <div className="menu-item">
                <div className="photo"> 
                    <a className="menu-nav" href="">
                     <img src="farmer.png"   height="200" width="200px"/>
                     <p className="menu-text">Farmers</p>
                    </a>
                </div>
                
                 <div className="photo">
                     <Link to="path" href="scout.js">
                     <img src="travel.jpg"  height="200" width="200px"/>
                     <p className="menu-text">Path view</p>
                    </Link>
                </div>

                <div className="photo">
                     <a className="menu-nav" href="">
                     <img src="setting.png"   height="200" width="200px"/>
                     <p className="menu-text">Settings</p>
                    </a>
                </div>
            </div>
        </div>
         );
    }
}
 
export default HomePage;