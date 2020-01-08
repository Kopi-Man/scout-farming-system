import React,{Component} from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Long extends Component{
    constructor(){
        super();
        this.state={
           longPost:[],
           longFarm:[],
           longFarm2:[],
           longFarm3:[],
           longFarm4:[]
             };
    }
   
   componentDidMount(){
       
      axios.get('http://localhost:4000/fsdget')
      .then(response => response.data)
      .then(response =>this.setState({longPost:
         response.data}))
      .catch (error =>{console.log(error)});
   
      axios.get('http://localhost:4000/longFarmerdget')
      .then(response => response.data)
      .then(response =>this.setState({longFarm:
         response.data}))
      .catch (error =>{console.log(error)});
    
      axios.get('http://localhost:4000/longFarmer2dget')
      .then(response => response.data)
      .then(response =>this.setState({longFarm2:
         response.data}))
      .catch (error =>{console.log(error)});
    

    axios.get('http://localhost:4000/longFarmer3dget')
    .then(response => response.data)
    .then(response =>this.setState({longFarm3:
       response.data}))
    .catch (error =>{console.log(error)});
   

    axios.get('http://localhost:4000/longFarmer4dget')
  .then(response => response.data)
  .then(response =>this.setState({longFarm4:
     response.data}))
  .catch (error =>{console.log(error)});
}

     render(){
     const {longPost} = this.state;
     const {longFarm} = this.state;
     const {longFarm2} = this.state;
     const {longFarm3} = this.state;
     const {longFarm4} = this.state;
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
                <h3 className={navbar.submngDetail}>ID: &nbsp; &nbsp; &nbsp;{longPost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.id}</span>)}</h3>
                <h3 className={navbar.submngDetail}>Name:{longPost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.name}</span>)}</h3>
                <h3 className={navbar.submngDetail}>E-mail:{longPost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.email}</span>)}</h3>
                <h3 className={navbar.submngDetail}>Mobile-No:{longPost.map(post=><span style={{fontSize:"18px",color:'brown'}}>{post.mobile}</span>)}</h3>
               </div>
             </div>
          </div>

         <div className={navbar.farmer}>
            <h2 className={navbar.sublongTermTitle}>Long Term Farm</h2>
            {/* <div className={navbar.addFam}><span className={navbar.plus}>+</span>Farmer</div>*/}
           
         <div className={navbar.LongFamuser1}>
           <img className={navbar.LongFamuserImg1} src="farmer2.png"   height="100" width="100px"/>
               <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:&nbsp;{longFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>&nbsp;0{post.id}</span>)}</h4>
        <h4>Employee Name:&nbsp;{longFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>{post.name}</span>)}</h4>
               <h4>Employee Type:{longFarm.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}>{post.farm}</span>)}</h4>
               </div> 
           </div> 

        <div className={navbar.LongFamuser2}>
           <img className={navbar.LongFamuserImg2} src="farmer2.png"   height="100" width="100px"/>
           <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{longFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> 0{post.id}</span>)}</h4>
               <h4>Employee Name:{longFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> {post.name}</span>)}</h4>
               <h4>Employee Type:{longFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> {post.farm}</span>)}</h4>
               </div> 
         </div> 

        <div className={navbar.LongFamuser3}>
             <img className={navbar.LongFamuserImg3} src="farmer2.png"   height="100" width="100px"/>
             <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{longFarm3.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> 0{post.id}</span>)}</h4>
               <h4>Employee Name:{longFarm3.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> {post.name}</span>)}</h4>
               <h4>Employee Type: {longFarm2.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> {post.farm}</span>)}</h4>
               </div> 
          </div> 

        <div className={navbar.LongFamuser4}>
           <img className={navbar.LongFamuserImg4} src="farmer2.png"   height="100" width="100px"/>
           <div className={navbar.LongFamuserDetail1}>
               <h4>Employee ID:{longFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> 0{post.id}</span>)}</h4>
               <h4>Employee Name:{longFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> 0{post.name}</span>)}</h4>
               <h4>Employee Type:{longFarm4.map(post=><span style={{fontSize:"18px",color:'#ff9900'}}> 0{post.farm}</span>)}</h4>
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

export default Long;