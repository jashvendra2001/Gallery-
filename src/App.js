import React ,{useState} from "react"
import MainFile from "./components/MainFile";
import './App.css';
import { AppContext } from './context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
function App() {
  const [ imagesOfGalleryArr, setImagesOfGalleryArr ] = useState([]);
	const [typeOfComponent,setTypeOfComponent]=useState("default")
	const dispatchUserEvent = (actionType, payload) => {
    debugger
		switch (actionType) {
			case 'SET_ALL_IMAGES':
				setImagesOfGalleryArr([...payload]);
				return;	
      case 'SET_COMPONENT':
				setTypeOfComponent([...payload.type]);
				return;

			default:
				return;
		}
	};

  return (
    <AppContext.Provider value={{ imagesOfGalleryArr,typeOfComponent, dispatchUserEvent }}>
    <Router>
    <Routes>
      
        <Route exact path="/" element={<MainFile searchedItem="snow"/>}></Route>
        <Route exact path="/mountain" element={<MainFile  searchedItem="mountain"/>}></Route>
        <Route exact path="/beach" element={<MainFile searchedItem="beach"/>}></Route>
        <Route exact path="/bird" element={<MainFile searchedItem="bird"/>}></Route>
        <Route exact path="/food" element={<MainFile searchedItem="food" />}></Route>
        <Route
          exact
          path="/search/:searchedItemPic"
          element={<MainFile searchedItem="search"/>}
        ></Route>
   
    </Routes>
  </Router>
  </AppContext.Provider>
    
  
  );
}

export default App;
