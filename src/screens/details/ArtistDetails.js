import { Typography } from "@material-ui/core";
import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import moviesData from "../../common/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

class ArtistDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieId: 2,
      starColor: ["black", "black", "black", "black", "black"]
    }
  }
  setColor = (index) =>{
    let newArr = [...this.state.starColor];
    const changedColor = newArr[index] === "black" ? "yellow" : "black";
    console.log(newArr);
    console.log(this.state.starColor);
    this.setState({
      starColor: newArr
    })
  }
  render(){
    return(
      <>
        <Typography>
          Rate this movie:
        </Typography>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[0]}} onClick={()=>this.setColor(0)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[1]}} onClick={()=>this.setColor(1)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[2]}} onClick={()=>this.setColor(2)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[3]}} onClick={()=>this.setColor(3)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[4]}} onClick={()=>this.setColor(4)}/>
        <Typography style={{margin: "16px 0 16px 0"}}>Artists: </Typography>
        <ImageList cols={2} gap={5}>
          {moviesData[this.state.movieId].artists.map((item)=>(
            <ImageListItem key={item.id}>
              <img src={item.profile_url} alt={item.first_name + " " + item.last_name} />
              <ImageListItemBar
                title={item.first_name + " " + item.last_name}
              />
        </ImageListItem>
        ))}
      </ImageList>
      </>
    )
  }
}

export default ArtistDetails;