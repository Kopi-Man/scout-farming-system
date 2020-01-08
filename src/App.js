import React,{Component} from 'react';

import Navbar from './components/navbar';
import LoginPage from './components/login'
import Start from './components/start'
import Register from './components/Register';
import HomePage from './components/home';
import {Route} from 'react-router-dom';
import MapContainer from './components/map'
import Farm from './components/farmType';
import Long from './components/longEmployee';
import Short from './components/shortEmployee';
import Live from './components/liveEmployee';
import Poultry from './components/poultryEmployee';
import Report from './components/report';

class App extends Component{

    render(){
         return (<div>
                  <Navbar/>
            <Route path="/" exact component={Start}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/sign" exact component={Register}/>
            <Route path="/home" exact component={HomePage}/>
            <Route path="/map" exact component={MapContainer}/>
            <Route path="/emp" exact component={Farm}/>
            <Route path="/long" exact component={Long}/>
            <Route path="/short" exact component={Short}/>
            <Route path="/live" exact component={Live}/>
            <Route path="/poultry" exact component={Poultry}/>
            <Route path="/report" exact component={Report}/>
         </div>);
    }
}

export default App;