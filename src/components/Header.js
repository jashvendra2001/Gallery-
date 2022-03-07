import React, { useState ,useContext} from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    TextField,
    Button,
    InputAdornment,
    MenuItem
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import CollectionsIcon from '@material-ui/icons/Collections';
// import Box from '@material-ui/core/Box';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Details } from "@material-ui/icons";
import { AppContext } from '../context';
// import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// import MenuItem from '@material-ui/core/MenuItem';


const pages= [{name:'Mountains',toGo:"/mountain"}, {name:'Beach',toGo:"/beach"}, {name:'Birds',toGo:"/bird"},{name:'Food',toGo:"/food"}]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header(){

    const [anchorElNav, setAnchorElNav] = useState(null);
    const { dispatchUserEvent } = useContext(AppContext);
    const [searchedValue,setSearchedValue]=useState("")
    const navigate = useNavigate(); 
    console.log(pages)
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (details) => {
    dispatchUserEvent("SET_COMPONENT",{type:details.name})
    navigate(details.toGo)
    setAnchorElNav(null);
  };
const handleSearch=()=>{
    dispatchUserEvent("SET_COMPONENT",{type:searchedValue})
    navigate(`/search/${searchedValue}`)
    setSearchedValue("")
}

    return(
        <AppBar position="static" style={{backgroundColor:"#f15519",height: "5rem",
        display: "flex",
        border: "3px solid white",
        borderRadius: "40px",
        marginTop: "15px",
        alignItems: "center",
        justifyContent: "center",}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{    display: "flex",
        justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",}}>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={()=>handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box style={{color:"black"}}>
              <CollectionsIcon /><span style={{fontSize:"25px"} }>Snapshot</span>
              
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
          <Box>
              <form onSubmit={()=>handleSearch()}>
              <TextField
               style={{backgroundColor:"#FFFFFF",width: "150%",
               border: "0px solid",
               borderRadius: "0px 60px 0px 60px"}}
  placeholder="Want to search something new....."
  value={searchedValue}
  variant="outlined"
  onChange={(e)=>setSearchedValue(e.target.value)}
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon type="submit"/>
        </IconButton>
      </InputAdornment>
    )
  }}
/>
</form>
          </Box>
          <Box 
        //   sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, display: 'block',fontSize:"20px" }}
style={{fontSize:"16px" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Header