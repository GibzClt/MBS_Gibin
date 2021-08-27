import React from "react";
import Header from "../../common/header/Header"
import "./Home.css"
import ImageList from '@material-ui/core/ImageList';
import moviesData from  "../../common/moviesData"
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
  },
  title: {
    color: "#fff",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


 const SingleLineImageList = function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList}  cols={6} rowHeight={180}>
            {moviesData.map((item)=>(
              <ImageListItem key={item.id}>
                <img src={item.poster_url} alt={item.title} />
                <ImageListItemBar 
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
      </ImageList>
    </div>
  );
}

const dateConverter=dateEntry=>{
  let myDate = new Date(dateEntry);
  return myDate.toDateString();
}

class Home extends React.Component{
  render(){
    return(
      <div id="home-main">
        <Header />
        <span id="upcoming-mov">Upcoming Movies</span>
        <SingleLineImageList />
        <div className="flex-container">
          <div className="left">
            <ImageList rowHeight={350} cols={4} gap={10}>
              {moviesData.map((item)=>(
                <ImageListItem key={item.id}>
                  <img className="img-link" src={item.poster_url} alt={item.title} />
                  <ImageListItemBar
                  title={item.title}
                  subtitle={<span>{"Release Date:  " + dateConverter(item.release_date)}</span>}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;