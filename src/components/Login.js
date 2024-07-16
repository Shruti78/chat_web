import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import "firebase/auth";
import {auth} from '../firebase';

const Login = () => {
  return (
    <div id='login-page'>
       <div id ='login-card'>
            <h2>WELCOME TO CHAT APP</h2>
            <div className='login-button google'
           onClick={()=>auth.signInWithRedirect(new auth.GoogleAuthProvider())}
            >
        <GoogleOutlined/>
       </div>
       <br /> <br />
       <div className='login-button facebook'>
        <FacebookOutlined/>
       </div>
       </div>


    </div>
  )
}

export default Login