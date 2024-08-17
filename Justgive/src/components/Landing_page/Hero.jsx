import React from "react";
import "../../assets/css/hero.css";
import children from "../../assets/images/poor_black_children_smiling.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>Help Orphans With Justgive</h1>
          
          <p>
            With just a few taps on your phone you can donate to someone in need
            and change his life. Help orphans by donating or volunteering on{" "}
            <b>Justgive</b> today.
          </p>
          <NavLink to="/Signup" className="join">
            Join Us
          </NavLink>
        </div>
        <div className="picture">
          <div className="pic"></div>
        </div>
      </div>
    </div>
  );
}
