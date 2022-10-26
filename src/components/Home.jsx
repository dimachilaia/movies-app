import React,{useState} from 'react'
import styled from 'styled-components'
import Input from './Input'
import MovieRoutes from './MovieRoutes'
import bookmarkedImage from '../assets/icon-bookmark-empty.svg'
import  Trending from './Trending'
import checkedImage from '../assets/icon-bookmark-full.svg'
import iconPlay from '../assets/icon-play.svg'


const Home = ({data, output, setOutput}) => {

  const checkedHandler = (title)=>{
    const outputChecker = output.map((item)=>{
      if(item.title === title){
        item.isBookmarked = !item.isBookmarked
      }
      return item;
     })
     setOutput(outputChecker)
  }

  const placeholder = 'Search for Movies and TV Series';

  return (
    <MainDiv >
      <MainHome>
          <MovieRoutes path="/home"/>
       </MainHome>

       <div>
         <Input data={data} output={output} setOutput={setOutput} placeholder={placeholder} filteredMovies ={output}/>
          
        <TrendingForm>Recommended for you</TrendingForm>


        <Trending output={output}/>
        
        
        <DivContainer>
        {output.map((item, index)=>{
          const {title, isBookmarked} = item;

          return <MappedDiv key={index}>
          
          <div>
          <BookmarkImage onClick={()=>checkedHandler(title)}>
            <img src={isBookmarked ? checkedImage : bookmarkedImage}  alt="bookmarkimg" />
           </BookmarkImage>

           <PlayImage >
            <div>
              <img src={iconPlay} alt="Bookmark"/>
              <p>Play</p>
            </div>
        </PlayImage>
            
           <img src={process.env.PUBLIC_URL + item.thumbnail.regular.large} alt="images" /> 


           <MovieTexts>
             <span>{item.year}</span>
             <span>{item.category}</span>
             <span>{item.rating}</span>
           </MovieTexts>

           <p style={{color:'white'}}>{item.title}</p>
         
           </div>
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
  div:hover{
    opacity:0.7;
  }

  p{
    font-size:14px;
    color:white;
  }
 img{
  width:163px;
  cursor:pointer;
  border-radius:10px;
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

 @media screen and (min-width: 1274px){
   width:24%;
 }
`
const TrendingForm = styled.p`
 padding-left:20px;
 color:white;
 font-size:18px;

 @media screen and (min-width: 768px){
   width:24%;
   font-size:28px;
   margin-top:50px;
   padding-left:10px;
 }

`
const MovieTexts = styled.div`

   span{
    color:#5A698F;
    font-size: 12px;
    font-weight: 300;
    padding:1px 5px;
    line-height: 14px;
   }
`

const MainHome = styled.div`

 /* @media screen and (min-width: 768px){
   display:flex;
 } */
`

const DivContainer = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:space-evenly;

 @media screen and (min-width: 660px){
  margin-left:20px;
 }
 @media screen and (min-width: 768px){
  margin-left:0px;
 }
`

const BookmarkImage = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#10141E;
  border-radius:80%;
  width:32px;
  mix-blend-mode: normal;
  height:32px;
  position:absolute;
  opacity: 0.5;
  transform:translateX(120px);
  margin-top:5px;

  @media screen and (min-width: 1024px){
  transform:translateX(240px);
   
 }
img{
  width:11.5px;
  border-radius:0;
  cursor:pointer;
 }


`

const PlayImage = styled.div`
 display:flex;
  align-items:center;
  justify-content:center;
  border-radius:80%;
  mix-blend-mode: normal;
  position:absolute;
  opacity: 0.2;
  transform:translate(40px, 30px);
  margin-top:5px;

  @media screen and (min-width: 1024px){
  transform:translate(100px,70px);
  opacity:0.5;
 }
img{
  width:20px;
  border-radius:0;
  cursor:pointer;
 }

 div{
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  cursor:pointer;
  gap:2px;
  width:80px;
  opacity: 0.1;
  border-radius: 28.5px;
  background-color:#5A698F;

  @media screen and (min-width: 1024px){
   width:100px;
   display:flex;
   justify-content:space-around;
   height:50px;
 }
 }

div:hover{
  opacity:1;
}

`