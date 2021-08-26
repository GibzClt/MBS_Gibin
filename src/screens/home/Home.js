import React from "react";
import Header from "../../common/header/Header"
import "./Home.css"

class Home extends React.Component{
  render(){
    return(
      <div id="home-main">
        <Header />
        <span id="upcoming-mov">Upcoming Movies</span>
      </div>
    )
  }
}

export default Home;