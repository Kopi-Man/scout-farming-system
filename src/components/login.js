import React from 'react';
import {Link} from 'react-router-dom';
import * as navbar from '../CSS/Nav.module.css';




const LoginPage=()=>(
    <div>
        <div className={navbar.loginTotal}>
        
         <div className={navbar.loginFormTot}>
        <form className={navbar.loginForm}>
        <h3 className={navbar.loginFormHead}>Login Page</h3>
        <div className={navbar.loginFormListTot}>
        <div className={navbar.loginuser}>
             <label className={navbar.loginLabel}>User Name</label><br/>
             <input className={navbar.LoginInput} type="text" name="username"  placeholder="User Name"/>
        </div>
        <div className={navbar.loginpass}>
            <label className={navbar.loginLabel}> password </label><br/>
             <input className={navbar.LoginInput} type="Password" name="lastname"  placeholder="Password"/>
           </div>
           <img src="user.png" className={navbar.formUser} width="200px" height="200px"/>
           </div>
           <div><br/>
           <Link to="/home" className={navbar.loginLink}>Login</Link><br/><br/>
             <button className={navbar.createBtn}> <Link to="/sign" className={navbar.createLink}>Create account</Link></button>
              </div>
        
        </form>
        </div>
        </div>
    </div>
)



export default LoginPage;