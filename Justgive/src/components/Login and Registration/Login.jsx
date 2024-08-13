import React from "react";
/* importing css */
import "../../assets/css/Login.css";
/*import of icons */

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";



export default function Login() {
  return (
    <div>
      <div className="main-login-form-conatiner">
        <div className="second-main-login-form-container">
          <div className="sub-picture-login-conatiner">
            <h2>Welcome Back</h2>
            <p>Let's make the world a better place</p>
          </div>
          <div className="sub-form-login-conatiner">
            <h2>LOGIN</h2>
            <form action="" method="POST">
              <div className="input-field">
                <input type="text" placeholder="Email" required /> <FaEnvelope className="icon" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Password" required /> <FaLock className="icon" />
              </div>
              <button type="submit" className="login-form-login-button">
                {" "}
                Login{" "}
              </button>
            </form>
            <div className="bottom-link">
              Don't have an account?
              <a href="#">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
