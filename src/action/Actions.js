import axios from "axios";

import { useContext } from 'react';
import { AppContext } from '../context';



const apiKey="d158bcf6164dfb926aa8a936e16bc9b8"
export const getImages=async(itemToSearch,dispatchUserEvent)=>{
    debugger
   await axios
    .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${itemToSearch}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
    
      // get an array of image-url
   
      debugger
      let images=response.data.photos.photo.map((photo) => {
          
        return getFlickrImageURL(photo, 'q');
      })
      console.log(images)
      dispatchUserEvent('SET_ALL_IMAGES',[...images]);
    });


    }
    const getFlickrImageURL = (photo, size) => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
          photo.secret
        }`;
        if (size) {
          // Configure image size
          url += `_${size}`;
        }
        url += '.jpg';
        return url;
      };
    //     .then(response => {
//         debugger
//         console.log(response.data.photos.photo)
//         let images=[]

//   if (response.data.photos.photo.length > 0) {
//     images = response.data.photos.photo.map(async(image) => {
//         let url=""
//       let server = image.server;
//       let id = image.id;
//       let secret = image.secret;
//       let title = image.title;
//        url =await `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
// let data={
//     imageUrl:url,
//     imageTitle:image.title,
//     imageId:image.id
// }
// return data
      
//     });
//     console.log(images)
//   }
//     //   const { data: { photos: { photo } } } = response
//     //   setImages(photo);
//     //   setLoading(false);
//     })
    // .catch(error => {
    //   console.log("Encountered an error with fetching and parsing data", error);
    // });

