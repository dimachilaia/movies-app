import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import MovieRoutes from './MovieRoutes'

const Home = ({data}) => {
  return (
    <MainDiv >
      <MainHome>
          <MovieRoutes/>
       </MainHome>

       <div>
         <Input/>
        <p style={{marginTop:'40px', color:'white', paddingLeft:'50px'}}>Trending</p>

        <DivContainer style={{display:'flex'}}>
        {data.map((item, index)=>{
          return <MappedDiv key={index}>
           <img src={process.env.PUBLIC_URL + item.thumbnail.regular.large}/>

           <div style={{padding:'10px 15px'}}>
             <span style={{color:'white', fontSize:'12px'}}>{item.title}</span>
             <span style={{color:'white'}}>{item.category}</span>
             <span style={{color:'white'}}>{item.rating}</span>
           </div>

           <p style={{color:'white'}}>{item.title}</p>
          </MappedDiv>
          })}
        </DivContainer>
        </div>
       </MainDiv>
  )
}

export default Home



const MainDiv = styled.div`
@media screen and (min-width: 768px){
   display:flex;
 }
`

const MappedDiv = styled.div`
  width:40%;
  padding:2px 5px;

 img{
  width:163px;
  cursor:pointer;
  background-color:red;
 }
 @media screen and (min-width: 615px){
   width:30%;
 }
 @media screen and (min-width: 768px){
   width:30%;
 }
 @media screen and (min-width: 1024px){
   width:27%;
   img{
    width:280px;
   }
 }

 @media screen and (min-width: 1224px){
   width:24%;
 }
`


const MainHome = styled.div`

 /* @media screen and (min-width: 768px){
   display:flex;
 } */
`

const DivContainer = styled.div`
 display:'flex';
 flex-wrap:wrap;
 justify-content:space-evenly;
`