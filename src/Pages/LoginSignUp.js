import React from "react";
import './CSS/LoginSignup.css';

function LoginSignUp() {
    return(
        <div className="loginsignup">
           <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="enter@email.com"/>
                <input type="password" placeholder="password"/>
            </div>
            <button>continue</button>
            <p className="loginsignup-login">Already have a account <span>log in here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms and privacy policy.</p>
            </div>
           </div>
           
        </div>
    )
}

export default LoginSignUp;