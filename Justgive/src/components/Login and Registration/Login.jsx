import React, { useState } from "react";
/* importing css */
import "../../assets/css/Login.css";
/*import of icons */

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  const [formdata, setFormData] = useState({ email: "", Password: "" });
  const[showpassword,setShowpassword]=useState(false);
  // function toggle_password_visibility(){
  //   setShowpassword(!showpassword)

  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(Password);
    console.log(email);
  }
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
            <form action="" method="POST" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Email"
                  value={formdata.email}
                  onChange={(e) =>
                    setEmail({ ...formdata, email: e.target.value })
                  }
                  required
                />{" "}
                <FaEnvelope className="icon" />
              </div>
              <div className="input-field">
                <input
                  type="Password"
                  placeholder="Password"
                  value={formdata.Password}
                  onChange={(e) =>
                    setPassword({ ...formdata, password: e.target.value })
                  }
                  required
                />{" "}
                <FaLock className="icon" />
              </div>
              <button type="submit" className="login-form-login-button">
                {" "}
                Login{" "}
              </button>
            </form>
            <div className="bottom-link">
              Don't have an account?
              <a href="#"><Link to="/Signup">Signup</Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
