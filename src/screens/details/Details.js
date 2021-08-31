import React from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import BackToHome from "./BackToHome";
import MoviePoster from "./MoviePoster";
import MovieTrailer from "./MovieTrailer";
import ArtistDetails from "./ArtistDetails";


class Details extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <div className="back-to-home">
          <BackToHome />
        </div>
        <div className="main-page">
          <div className="movie-poster">
            <MoviePoster />
          </div>
          <div className="movie-trailer">
            <MovieTrailer />
          </div>
          <div className="artist-details">
            <ArtistDetails />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Details;