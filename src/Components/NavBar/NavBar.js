import React, { useEffect, useState } from 'react'
import './NavBar.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import axios from '../../axios';
import {API_KEY, imageUrl} from '../../constants/constants'


function NavBar() {
  const [movie,setMovie] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[19])
    })
  },[])

  return (
      <div style = {{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='navbar'>
       
        <div className='flexcontainer2'>
          <h1 className='titleCard'>{movie ? movie.title : ""}</h1>
          <div className='banner_buttons'>
          <button className='button'><PlayCircleOutlineIcon/>Play</button>
          <button className="button"><AddIcon/>List</button>
          </div>
          <h1 className='posterdescription'>{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom"></div>

      </div>
   
   
  )
}

export default NavBar
