import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Banner.css'


function Banner(){
  return (
    <div>
       <div className='flex-container'>
       
                <img className='logo-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetflixLogo" />

            
            <div className='menu'><MenuIcon/></div>
            <div className='search'><SearchIcon/></div>
            <div className='dots'> <MoreHorizIcon/></div>
            
        </div>
    </div>
  )
}

export default Banner;
