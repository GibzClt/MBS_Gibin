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
  render(){
    return(
      <>
        <Typography
          variant="h6"
          component="h2"
        >
          {moviesData[this.state.movieId].title}
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
          {moviesData[this.state.movieId].release_date} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Rating: </strong>
          {moviesData[this.state.movieId].critics_rating} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Plot: </strong>
          <a href={moviesData[this.state.movieId].wiki_url}>[Wiki Link]</a>
          {moviesData[this.state.movieId].storyline} 
        </Typography>
        {/* <br /> */}
        <Typography>
          <strong>Trailer: </strong>
        </Typography>
        <div className="trailer">
          <YouTube
            videoId={moviesData[this.state.movieId].trailer_url.split("?v=")[1]}
            id="sY1S34973zA"
          />
        </div>
      </>
    )
  }
}
export default MovieTrailer;