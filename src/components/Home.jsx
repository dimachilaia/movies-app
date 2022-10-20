
import styled from 'styled-components'
import {useState } from 'react'
import myData from '../data.json'
import Trending from './Trending'
import Input from './Input'
import MovieRoutes from './MovieRoutes'

const Home = ({data}) => {

  return (
 <div>
 
 <MainHome>
   <MovieRoutes/>
     <Input/>
      <FilmsData>
      {data.map((item,index)=>{
      return <Trending item={item} key={index}/>
      })}
      </FilmsData>
     </MainHome>
    </div>
  )
}

export default Home

const MainHome = styled.div`

 @media screen and (min-width: 732px){
   /* display:flex;
   flex-wrap:nowrap; */
 }

  p{
    color:white;
    padding:3px 28px;
  }

`

const FilmsData = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
 gap:25px;
`