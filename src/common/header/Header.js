import React from "react";
import "./Header.css"
import logo from "./logo.svg";

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <img id="logo-img" src={logo} alt= "" />
        <p>HEADER</p>
      </div>
    )
  }
}

export default Header;