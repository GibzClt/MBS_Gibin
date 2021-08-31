import Typography from '@material-ui/core/Typography';
import React from "react";
import "./Details.css";


const BackToHome = () =>{
  return (
    <Typography style={{cursor: "pointer", width: "max-content"}} 
      gutterBottom={true}
    >
      <a>{"< Back to Home"}</a>
    </Typography>
  )
}

export default BackToHome;