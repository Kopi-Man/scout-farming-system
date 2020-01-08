import React,{Component} from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Live extends Component{
    constructor(props){
        super(props);
       this.state={
           livePost:[],
           liveFarm:[],
           liveFarm2:[],
           liveFarm3:[],
           liveFarm4:[]
       };

    }


    componentDidMount(){
        axios.get('http://localhost:4000/thdget')
        .then(response => response.data)
        .then(response =>this.setState({livePost:
           response.data}))
        .catch (error =>{console.log(error)});
    
        axios.get('http://localhost:4000/liveFarmerdget')
        .then(response => response.data)
        .then(response =>this.setState({liveFarm:
           response.data}))
        .catch (error =>{console.log(error)});
       
        axios.get('http://localhost:4000/liveFarmer2dget')
        .then(response => response.data)
        .then(response =>this.setState({liveFarm2:
           response.data}))
        .catch (error =>{console.log(error)});
        
        axios.get('http://localhost:4000/liveFarmer3dget')
        .then(response => response.data)
        .then(response =>this.setState({liveFarm3:
           response.data}))
        .catch (error =>{console.log(error)});
    
        axios.get('http://localhost:4000/liveFarmer4dget')
        .then(response => response.data)
        .then(response =>this.setState({liveFarm4:
           response.data}))
        .catch (error =>{console.log(error)});

    
    }
   
   
     render(){
        const {livePost} = this.state;
        const {liveFarm} = this.state;
        const {liveFarm2} = this.state;
        const {liveFarm3} = this.state;
        const {liveFarm4} = this.state;
       


         return(<div>
              <div style={styDiv}><Link to="/emp" style={styBtn}>Back</Link></div>
              {/*<h2 id={navbar.head2}>Feel The Experience</h2>*/}
               
             {/*  <img id={navbar.img2}  src="logoSenzAgro.png" height="150" width="150"/>
                   <div className={navbar.foot}>
                       {/*<Link to="/sign" id={navbar.sign}>sign up</Link><br/><br/>
                       <Link to="/login" id={navbar.login} >Login</Link>
         </div> */}
          <div className={navbar.manager}>
              <div className={navbar.submanager}>
                 <div className={navbar.imgContain}>
                 <img className={navbar.manImg} src="manager.png"   height="200" width="200px"/>
                 </div>
     <h2 className={navbar.mngTitle}>MANAGER</h2>
         <div className={navbar.mngDetail}>
         <h3 className={navbar.submngDetail}>ID:&nbsp; &nbsp; &nbsp;{livePost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.id}</span>)}</h3>
         <h3 className={navbar.submngDetail}>Name:{livePost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.name}</span>)}</h3>
         <h3 className={navbar.submngDetail}>E-mail:{livePost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.email}</span>)}</h3>
          <h3 className={navbar.submngDetail}>Mobile-No:{livePost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.mobile}</span>)}</h3>
         </div>
         </div>
          </div>

         <div className={navbar.farmer}>
            <h3 className={navbar.sublongTermTitle}>Live Stock Farm</h3>


            {/*<div className={navbar.addFam}><span className={navbar.plus}>+</span>Farmer</div>*/}
           
         <div className={navbar.LongFamuser1}>
           <img className={navbar.LongFamuserImg1} src="farmer3.png"   height="100" width="100px"/>
               <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{liveFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.id}</span>)}</h4>
               <h4>Employee Name:{liveFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.name}</span>)}</h4>
               <h4>Employee Type:{liveFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.farm}</span>)}</h4>
               </div> 
           </div> 

        <div className={navbar.LongFamuser2}>
           <img className={navbar.LongFamuserImg2} src="farmer3.png"   height="100" width="100px"/>
           <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{liveFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.id}</span>)}</h4>
               <h4>Employee Name:{liveFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.name}</span>)}</h4>
               <h4>Employee Type:{liveFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.farm}</span>)}</h4>
               </div> 
         </div> 

        <div className={navbar.LongFamuser3}>
             <img className={navbar.LongFamuserImg3} src="farmer3.png"   height="100" width="100px"/>
             <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{liveFarm3.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.id}</span>)}</h4>
               <h4>Employee Name:{liveFarm3.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.name}</span>)}</h4>
               <h4>Employee Type:{liveFarm3.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.farm}</span>)}</h4>
               </div> 
          </div> 

        <div className={navbar.LongFamuser4}>
           <img className={navbar.LongFamuserImg4} src="farmer3.png"   height="100" width="100px"/>
           <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{liveFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.id}</span>)}</h4>
               <h4>Employee Name:{liveFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.name}</span>)}</h4>
               <h4>Employee Type:{liveFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp; {post.farm}</span>)}</h4>
               </div> 
         </div> 
         
          </div>
         
         </div> );
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
 marginRight:'5px',
 marginBottom:'-30px'
};

export default Live;