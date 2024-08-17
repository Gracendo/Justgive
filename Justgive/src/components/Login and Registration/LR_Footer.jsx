import React from 'react'
/*importing css */
import '../../assets/css/LoginFooter.css';
/*import of logo of app  */
import logo from '../../assets/images/Logo-removebg-preview.png'

export default function LR_Footer() {
  return (
    <div>
        <div className="bottom-text"> <p>Powered by <img src={logo} height="60px"/> <b>Justgive</b> Modern nonprofit software</p></div>
     
    </div>
  )
}
