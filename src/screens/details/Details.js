import React from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import BackToHome from "./BackToHome";
import MoviePoster from "./MoviePoster";
import MovieTrailer from "./MovieTrailer";
import ArtistDetails from "./ArtistDetails";


class Details extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movieId: parseInt(this.props.location.search.split("?id=")[1])
    }
  }
  render(){
    console.log("Iam the PROPS", this.props);
    return (
      <div>
        <Header />
        <div className="back-to-home">
          <BackToHome />
        </div>
        <div className="main-page">
          <div className="movie-poster">
            <MoviePoster movieId={this.state.movieId} />
          </div>
          <div className="movie-trailer">
            <MovieTrailer movieId={this.state.movieId} />
          </div>
          <div className="artist-details">
            <ArtistDetails movieId={this.state.movieId} />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Details;