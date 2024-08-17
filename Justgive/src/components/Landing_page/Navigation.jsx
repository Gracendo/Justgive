import React,{useState} from "react";
/*Import of css */
import "../../assets/css/Navigation.css";
/*import of logo */
import logo from "../../assets/images/Logo-removebg-preview.png"
/*importing routing components */
import { NavLink,Link, Outlet } from "react-router-dom";
const Navigation = () => {
    const[menuopen,setMenuopen]=useState(false);

  return (
    <div>
      <nav>
        <Link to="/" >
          <img src={logo} alt="logo of justgive"className="logo"/>
        </Link>
        <div className="menu" onClick={()=>setMenuopen(!menuopen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuopen?"open":""}>
          <li>
            <NavLink to="/objectives">Objectives</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/#visionnp,">Vision</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/Value">Value</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/Login">Login</NavLink>
          </li>
          
        </ul>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
