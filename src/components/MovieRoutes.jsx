import firstImage from '../assets/logo.svg'
import secondImage from '../assets/icon-nav-home.svg'
import thirdImage from '../assets/icon-nav-movies.svg'
import fourthImage from '../assets/icon-nav-tv-series.svg'
import fiveth from '../assets/icon-nav-bookmark.svg'
import sixth from '../assets/image-avatar.png'
import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'

const MovieRoutes = () => {
  const first = <img src={secondImage} alt="home-image"/>


  return (
    <div>
    <HomeForm>
    <img src={firstImage} alt="logo"/>
      <ImagesForm>


      <NavLink to='/home'  style={({ isActive }) => 
      (isActive ? {opacity: '1'} : {opacity: '0.26'})}>
        <img src={secondImage} alt="home-image"/>
      </NavLink>

         <NavLink to="/movies" style={({ isActive }) => 
         (isActive ? {opacity: '1'} : {opacity: '0.26'})}>
           <img src={thirdImage} alt="movies-image"/>    
         </NavLink> 
         <NavLink to="/series" style={({ isActive }) => 
         (isActive ? {opacity: '1'} : {opacity: '0.26'})}>
           <img src={fourthImage} alt="tvseries-image"/>    
         </NavLink>
         <NavLink to="/bookmarked" style={({ isActive }) => 
         (isActive ? {opacity: '1'} : {opacity: '0.26'})}>
           <img src={fiveth} alt="bookmarked-image"/> 
         </NavLink>
      </ImagesForm>   
    <img src={sixth} alt="avatar-image"/>    
 </HomeForm>
 </div>
  )
}

export default MovieRoutes;


const HomeForm = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:#161D2F;
  padding:10px 25px;
  height:40px;
  align-items:center;

  @media screen and (min-width: 768px){
    display:flex;
    flex-direction:column;
    width:35px;
    margin:30px 30px;
    height:650px;
    border-radius: 20px;
  }
  
  img{
    width:25px;
    height:20px;
  }
  
`

const ImagesForm = styled.div`
  img{
    width:21px;
    height:20px;
    padding:5px 10px;
    cursor:pointer;
  }

  @media screen and (min-width: 768px){
    margin-bottom:150px;
    img{
      margin: 10px;
    }
  }

  img:hover{
   opacity:0.2;
  }

`
