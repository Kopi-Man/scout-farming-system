
import axios from 'axios';
import React, { Component } from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';

const initialState={
  firstName:"",
  lastName:"",
  mobileNo:"",
  address:"",
  email:"",
  password:"",
  confirmPassword:"",
  /*longCheckBox:true,
  shortCheckBox:"",
  liveCheckBox:"",
  poultryCheckBox:"",*/
  orgName:"",
   
    firstNameError:"",
    lastNameError:"",
    mobileNoError:"",
    addressError:"",
    emailError:"",
    passwordError:"",
    confirmPasswordError:"",
    orgNameError:""
  }  

class Register extends Component{
  state = initialState;
          state = {
          firstName:"",
          lastName:"",
          mobileNo:"",
          address:"",
          email:"",
          password:"",
          confirmPassword:"",
          longCheckBox:true,
          shortCheckBox:"",
          liveCheckBox:"",
          poultryCheckBox:"",
          orgName:"",
           
            firstNameError:"",
            lastNameError:"",
            mobileNoError:"",
            addressError:"",
            emailError:"",
            passwordError:"",
            confirmPasswordError:"",
            orgNameError:""
          
        };



      
      validate = () =>{
        console.log('helloclicked');
       let firstNameError ="";
       let lastNameError ="";
       let mobileNoError="";
       let addressError ="";
       let emailError ="";
       let passwordError ="";
       let orgNameError = "";
       let confirmPasswordError =""; 
       
       //let emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
       if(!this.state.firstName){
        firstNameError = "can't be blank";
         }
        /* if(firstNameError){
          this.setState({firstNameError});
          return false;
        }*/
       
        if(!this.state.lastName){
          lastNameError = "can't be blank";
           }
          /* if(lastNameError){
            this.setState({lastNameError});
            return false;
          }*/

         /* if(!this.state.mobileNo){
               mobileNoError= 'can not be blank';
             }*/

      if(!this.state.mobileNo){
              mobileNoError= 'number is empty';
            }
         /* if((this.state.mobileNo.length<11) && (this.state.mobileNo.length>9)){
               mobileNoError= "correct number";
            }*/
              
      if(((this.state.mobileNo.length<10) && (this.state.mobileNo.length>0)) || ((this.state.mobileNo.length<20) && (this.state.mobileNo.length>10))){
              mobileNoError= <span style={{fontWeight:'bold', color:'orange'}}>invalid number</span>;
           }

             /*if(mobileNoError){
              this.setState({mobileNoError});
              return false;
            }*/

          if(!this.state.address){
            addressError="can't be blank";
             }
            /* if(addressError){
              this.setState({addressError});
              return false;
            }*/
          /*if(!this.state.password){
              passwordError= 'can not be blank';
               }*/
     if(((this.state.password.length<6)&&(this.state.password.length>0)) || (this.state.password.length>6) ){
                passwordError=<span style={{fontWeight:'bold', color:'orange'}}>should be 6d igits</span>;
                 }
               
        
        if(!this.state.password){
             passwordError= 'password is empty';
        }       

          if(!this.state.orgName){
            orgNameError= "can't be blank";
                 }
          
            /* if(!this.state.confirmPassword){
            confirmPasswordError= 'not match';
               }*/

       if((this.state.password===this.state.confirmPassword) && (this.state.password.length===6) ){
            //confirmPasswordError= <span style={{fontWeight:'bold', color:'#006600'}}>password is match</span>;
                   }
                   else confirmPasswordError= 'not match';
                 
       if(!this.state.email.includes('@')){
         emailError = 'invalid email';
       }
        if(confirmPasswordError||orgNameError|| mobileNoError||emailError || addressError || firstNameError||lastNameError||passwordError){
          this.setState({confirmPasswordError,orgNameError, firstNameError,emailError,addressError,mobileNoError,lastNameError,passwordError});
          return false;
        }
       
   
       return true;
      };

      
      
      handleChangeSubmit=(event)=>{
        console.log('hell');
      event.preventDefault();
      console.log('he');
      const isValid = this.validate();
      console.log('herr');
       if(isValid){
        console.log('valid');
        console.log(this.state);
     
     axios.post('http://localhost:4000/owner/adding',this.state)
     .then(response=>{
       console.log(response);
     }) .catch(error=>{console.log(error)})
     
     console.log('after axios');
     //**FETCH METHOD */
     
     /* fetch('/todo/meterla',{
        methodd:'POST',
        res:JSON.stringify({
          task:this.state
        }),
        headers:{"Content-Type":"application/json"}
      })
      .then(function(response){
        return response.json()
      }).then(function(body){
        //console.log(body);
         alert(this.state)
      });*/
      
   /* console.log("new fetched");*/
         this.setState(initialState);
       };
  


       /* console.log('submiteddd');

       if(!this.state.firstName){
          this.setState({firstNameError:this.state.firstNameError="can't be blank"});}
    
    if(this.state.lastName===null){
    this.setState({lastsNameError:this.state.formErrors.lastsNameError="can't be blank"});}
   
    if(this.state.mobileNo===null){
      this.setState({mobileNo:this.state.formErrors.mobileNo="can't be blank"});}

    
     
     if(this.state.password===null){
      this.setState({password:this.state.formErrors.password="can't be blank"});
      /*if(this.state.password===!null){
        this.setState({password:this.state.formErrors.password="correct"});}
     }*/
    
     /* this.setState(initialState);*/
    
    }

    
     
      


      handleChangeFn=(e)=>{
         this.setState({firstName:e.target.value});
        
      }
      handleChangeLn=(e)=>{
        this.setState({lastName:e.target.value});
       
     }
     handleChangeMn=(e)=>{
      this.setState({mobileNo:e.target.value});
      
   }

   handleChangeAd =(e)=>{
    this.setState({address:e.target.value});
    
   }

   handleChangeEm=(e)=>{
    this.setState({email:e.target.value});
   
  }
  handleChangePsd=(e)=>{
    this.setState({password:e.target.value});
  
  }

  onChangeOrg=(e)=>{
    this.setState({orgName:e.target.value});
    
  }

  onChangeConPsd=(e)=>{
    this.setState({confirmPassword:e.target.value});

  }
   
  HlongCheckBox=(e)=>{
     this.setState({longCheckBox:e.target.checked});
   }
   
   

render(){ 
  return ( 
 
    <div>
         <div style={styDiv}><Link to="/" style={styBtn}>Back</Link></div>
      <div className={navbar.regiTotal}>
        <h2 className={navbar.Rhead}>registration</h2>
           
          <form className={navbar.registForm} /*onSubmit={this.handleChangeSubmit}*/>
             <div className={navbar.registdv}>
          
              <div className={navbar.flname}>
                <div>
                  <label className={navbar.registLabel}>First Name</label><br/>
                  <input 
                className={navbar.registInput1} 
                type="text" 
                name="firsName"  
                placeholder="First Name"
                noValidate
                onChange={this.handleChangeFn}
                /><br/>
<span style={{color:"#e60000",fontWeight:'bold'}}>{this.state.firstNameError}</span>
                </div>

            <div>
           <label className={navbar.registLabel}>Last Name</label><br/>
             <input 
                className={navbar.registInput1}
                type="text" 
                name="lastName"  
                placeholder="Last Name"
                noValidate
                onChange={this.handleChangeLn}
                /><br/>
       <span style={{color:"#cc0000",fontWeight:'bold'}}>{this.state.lastNameError}</span>
         
           </div>
           </div>
   
         
           <div className={navbar.userTOorgtype}>
           <div>
           <div>
           <label className={navbar.registLabel}>Mobile No</label><br/>
            <input 
             className={navbar.registInput2} 
             type="number" 
             name="mobileNo"  
             placeholder="077-"
             noValidate
             onChange={this.handleChangeMn}
             /><br/>
             <span style={{color:"#e60000",fontWeight:'bold'}}>{this.state.mobileNoError}</span>
            </div>

           <div>
           <label className={navbar.registLabel}>Address</label><br/>
           <input 
             className={navbar.registInput2} 
             type="text" 
             name="address"  
             placeholder="address"
             noValidate
             onChange={this.handleChangeAd}
             /> <br/>
          <span style={{color:"#e60000",fontWeight:'bold'}}>{this.state.addressError}</span>

           </div>
           
           
           <div>
           <label className={navbar.registLabel}> Email</label><br/>
              <input 
                   className={navbar.registInput2} 
                   type="email"
                   name="email"
                   placeholder="example@gmail.com"
                   noValidate
                   onChange={this.handleChangeEm}
                   /><br/>
<span style={{color:"#e60000",fontWeight:'bold'}}>{this.state.emailError}</span>

           </div>     
          
          <div>
              <label className={navbar.registLabel}> password </label><br/>
              <input 
                 className={navbar.registInput2} 
                 type="Password" 
                 name="password"  
                 placeholder="6 digits"
                 noValidate
                 onChange={this.handleChangePsd}
                 />
<div style={{color:"#e60000",fontWeight:'bold'}}>{this.state.passwordError}</div>

           </div>
      </div>
            
            <div className={navbar.orgNameANDTypeCont} >
             <div>
               <label  className={navbar.registLabel}>Organization Name</label><br/>
               <input 
                  className={navbar.registInput2}
                  type="text" 
                  name="orgName"  
                  placeholder="Org Name"
                  noValidate
                  onChange={this.onChangeOrg}
                  />
         <div style={{color:"#cc0000",fontWeight:'bold'}}>{this.state.orgNameError}</div>

             </div>
                <div className={navbar.orgTypeCont}>
                 <label className={navbar.Orghead}>Organization Type</label><br/>
                
              <input 
                   type="checkbox" 
                   className={navbar.InputCheckBox} 
                   name="farm1" value="LongTerm"
                   checked={this.state.longCheckBox}
                   onChange={this.HlongCheckBox}
                   />  
              &nbsp;<span style={{fontWeight:'bold',color:'#b30059'}}>Long Term Farm</span><br />

              <input 
                 type="checkbox"  
                 className={navbar.InputCheckBox} 
                 name="farm2" 
                 value="livestock"
                
                 />
                  &nbsp;<span style={{fontWeight:'bold',color:'#b30059'}}>Short Term Farm</span><br />

              <input 
                   type="checkbox"  
                   className={navbar.InputCheckBox}  
                   name="farm3" 
                   value="shortterm"
                   />
                  &nbsp;<span style={{fontWeight:'bold',color:'#b30059'}}>Live Stock Farm</span> <br />

              <input 
                 type="checkbox"  
                 className={navbar.InputCheckBox}  
                 name="farm4" 
                 value="longterm"
                 /> 
                 &nbsp;<span style={{fontWeight:'bold',color:'#b30059'}}>Poultry Farm</span> <br />

                 </div>

               <div className={navbar.LpsdANDIpsd}>
                <label className={navbar.registLabel}> confirm password </label><br />
                 <input 
                     className={navbar.registInput2}
                     type="password" 
                     name="confirmPassword" 
                     placeholder="Confirm Password"
                     noValidate
                     onChange={this.onChangeConPsd}
                     /> 
  <div style={{color:"#cc0000",fontWeight:'bold'}}>{this.state.confirmPasswordError}</div>


                </div>
            </div>
          </div>

       </div>

             <div className={navbar.RegCreateAccount}>
               <span>{this.state.sm}</span>
              <button 
                className={navbar.registSubmit}
                 type="submit"
                onClick={this.handleChangeSubmit}
                >
                Create Account</button>
              <small className={navbar.RegCreateAccountText}>Already Have an Account?</small>
            </div>
          </form>
          
        </div>
         </div>
);}
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
export default Register;