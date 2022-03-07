import React, { useEffect, useContext, useState } from "react";
import { AppContext } from '../context';
import {Card,CardMedia,Grid} from '@material-ui/core';
// import CardContent from '@mui/material/CardContent';
// import  from '@mui/material/CardMedia';
function MainFile({searchedItem}){
    
 
    // const {searchedItemPic}=useParams();
    const { imagesOfGalleryArr } = useContext(AppContext);
    const [allImages,setAllImages]=useState([])
    useEffect(()=>{
        if(imagesOfGalleryArr.length>0){
            setAllImages([...imagesOfGalleryArr])
        }
        console.log("imagesOfGalleryArr",imagesOfGalleryArr)
    },[imagesOfGalleryArr])
  
    return(
        <Grid container spacing={8} style={{width:"100%",  margin: "0px"}}>
  {/* <Grid item xs={8}> */}
    {imagesOfGalleryArr.map((ele,index)=>{
        return(
            <Grid item xs={2} sm={4} md={3} key={index}>
            <Card style={{    backgroundColor: "black",
    border: "4px solid yellow",
    padding: "3%",
    borderRadius: "50%"}}>
     
            <CardMedia
              component="img"
              style={{    border: "0px solid orange",
                borderRadius: "50%",
                background: "black"}}
              image={ele}
              alt="green iguana"
            />
          
        </Card>
        </Grid>

        )
    })}
        
      </Grid>
    //   </Grid>
    )
}

export default MainFile