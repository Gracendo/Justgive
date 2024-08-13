import React from "react";
/* importing css */
import "../../assets/css/Login.css";
/*import of icons */

import { FaEnvelope } from "react-icons/fa";
import { FaGenderless, FaLock, FaPerson, FaPhone } from "react-icons/fa6";

export default function Signup() {
  return (
    <div>
      <div className="main-login-form-conatiner">
        <div className="second-main-login-form-container">
          <div className="sub-picture-login-conatiner">
            <h2>
              Welcome TO <b>Justgive</b>
            </h2>
            <p>Let's make the world a better place</p>
          </div>
          <div className="sub-form-login-conatiner">
            <h2>SIGN UP</h2>
            <form action="" method="POST">
              <div className="input-field">
                <input type="text" placeholder="Name" />{" "}
                <FaPerson className="icon" />
              </div>
              <div className="phone_gender">
              <div className="input-field">
                <input type="text" placeholder="Phone number" />{" "}
                <FaPhone className="icon" />
              </div>
              <div className="input-field">
                <select name="gender">
                  <option aria-readonly>Gender</option>
                  <option value="M">Male </option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>{" "}
                <FaGenderless  className="icon" />
              </div>
              </div>

              <div className="input-field">
                <input type="text" placeholder="Email" />{" "}
                <FaEnvelope className="icon" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="Password" />{" "}
                <FaLock className="icon" />
              </div>
              <button type="submit" className="login-form-login-button">
                {" "}
                Signup{" "}
              </button>
            </form>
            <div className="bottom-link">
              Have an account?
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
