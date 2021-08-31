import Typography from "@material-ui/core/Typography";
import React from "react";
import YouTube from "react-youtube";
import moviesData from "../../common/moviesData";
import "./Details.css";


class MovieTrailer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieId : 2
    }
  }
  topMargin = {marginTop: 16};
  dateConverter=dateEntry=>{
    let myDate = new Date(dateEntry);
    return myDate.toDateString();
  }
  render(){
    return(
      <>
        <Typography
          variant="h6"
          component="h2"
          color="primary"
        >
          {moviesData[this.state.movieId].title.toLocaleUpperCase()}
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Genre: </strong>
          {moviesData[this.state.movieId].genres.join(", ")} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Duration: </strong>
          {moviesData[this.state.movieId].duration + " min"} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Release Date: </strong>
          {this.dateConverter(moviesData[this.state.movieId].release_date)} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Rating: </strong>
          {moviesData[this.state.movieId].critics_rating} 
        </Typography>
        {/* <br /> */}
        <Typography style={this.topMargin}>
          <strong>Plot: </strong>
          <a href={moviesData[this.state.movieId].wiki_url}>[Wiki Link]</a>
          {moviesData[this.state.movieId].storyline} 
        </Typography>
        {/* <br /> */}
        <Typography style={this.topMargin}>
          <strong>Trailer: </strong>
        </Typography>
        <YouTube className="trailer"
          videoId={moviesData[this.state.movieId].trailer_url.split("?v=")[1]}
          id="sY1S34973zA"
        />
      </>
    )
  }
}
export default MovieTrailer;