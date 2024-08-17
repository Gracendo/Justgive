import React, { useState } from "react";
/* importing css */
import "../../assets/css/signup.css";
/*import of logo */
import logo from "../../assets/images/Logo-removebg-preview.png";
/*import of icons */

import { FaEnvelope } from "react-icons/fa";
import { FaGenderless, FaLock, FaPerson, FaPhone, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Signup() {
  const [signupformdata, setSignupformdat] = useState({
    name: " ",
    phone_number: " ",
    gender: " ",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }
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
            <form action="" method="POST" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Name"
                  value={signupformdata.name}
                  onChange={(e) =>
                   setSignupformdat({ ...signupformdata, name: e.target.value })
                  }
                  required
                />{" "}
                <FaUser className="icon" />
              </div>
              <div className="phone_gender">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Phone number"
                    value={signupformdata.phone_number}
                    onChange={(e) =>
                     setSignupformdat({
                        ...signupformdata,
                        phone_number: e.target.value,
                      })
                    }
                    required
                  />{" "}
                  <FaPhone className="icon" />
                </div>
                <div className="input-field">
                  <select
                    name="gender"
                    value={signupformdata.gender}
                    onChange={(e) =>
                     setSignupformdat({ ...signupformdata, gender: e.target.value })
                    }
                    required
                  >
                    <option aria-readonly>Gender</option>
                    <option value="M">Male </option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>{" "}
                  <FaGenderless className="icon" />
                </div>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="Email"
                  value={signupformdata.email}
                  onChange={(e) =>
                   setSignupformdat({ ...signupformdata, email: e.target.value })
                  }
                  required
                />{" "}
                <FaEnvelope className="icon" />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Password"
                  value={signupformdata.password}
                  onChange={(e) =>
                   setSignupformdat({ ...signupformdata, password: e.target.value })
                  }
                  required
                />{" "}
                <FaLock className="icon" />
              </div>
              <button type="submit" className="login-form-login-button">
                {" "}
                Signup{" "}
              </button>
            </form>
           
            <div className="bottom-link">
             Have an account? 
              <a href="#"> <Link to="/Login">Login</Link>  </a>
            </div>
            <div className="bottom-link">
              Want an orphanage account?
              <a href="#"> <Link to="/Orphanage_signup">Create</Link>  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
