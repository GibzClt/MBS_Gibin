import React from 'react';
import moviesData from "../../common/moviesData";
import ImageListItem from '@material-ui/core/ImageListItem';
import "./Details.css";


class MoviePoster extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieSelected : ""
    }
  }
  render(){
    return <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" alt="Demo for now" />
  }
}

export default MoviePoster;