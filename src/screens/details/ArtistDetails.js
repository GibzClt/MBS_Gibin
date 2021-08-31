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
    if(changedColor === "yellow"){
      if(index === 0){
        newArr[index] = changedColor;
      }else{
        newArr[index] = newArr[index - 1] === changedColor ? changedColor : newArr[index];
      }
    } else{
      if(index === this.state.starColor.length - 1){
        newArr[index] = changedColor;
      }else{
        newArr[index] = newArr[index + 1] === changedColor ? changedColor : newArr[index];
      }
    }
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
          <strong>Rate this movie:</strong>
        </Typography>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[0]}} onClick={()=>this.setColor(0)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[1]}} onClick={()=>this.setColor(1)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[2]}} onClick={()=>this.setColor(2)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[3]}} onClick={()=>this.setColor(3)}/>
        <StarBorderIcon className="rate-star" style={{color:this.state.starColor[4]}} onClick={()=>this.setColor(4)}/>
        <Typography
          style={{margin: "16px 0 16px 0"}}  
        ><strong>Artists: </strong>
        </Typography>
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