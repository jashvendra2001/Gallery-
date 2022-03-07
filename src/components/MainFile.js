import React, { useEffect ,useContext} from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Body from "./Body"
import { AppContext } from '../context';
import {getImages} from "../action/Actions"
function MainFile({searchedItem}){

    const {imagesOfGalleryArr,typeOfComponent, dispatchUserEvent } = useContext(AppContext);
 
    const {searchedItemPic}=useParams();
       useEffect(()=>{
        if(searchedItem!=="search"){
            getImages(searchedItem,dispatchUserEvent)
            // searchItemRelatedPic(searchedItem)
        }
        else{
            getImages(searchedItemPic,dispatchUserEvent)
        }
console.log(searchedItemPic,"searchedItemPic")
    },[typeOfComponent])

    return(
        <>
        <Header/>
        <Body/>
        </>
    )
}

export default MainFile