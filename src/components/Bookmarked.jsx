
import React from 'react'
import MovieRoutes from './MovieRoutes'
// import Input from './Input'
import styled from 'styled-components'
import checkedImage from '../assets/icon-bookmark-full.svg'
import Input from './Input'
import bookmarkedImage from '../assets/icon-bookmark-empty.svg'


const Bookmarked = ({output, setOutput}) => {

 const deleteHandler = (check)=>{
  const deleteFunc = output.filter((item)=>{
    if(item.title === check){
      item.isBookmarked  = !item.isBookmarked
    }
    return item
  })
  setOutput(deleteFunc)
}

const placeholder = 'Search for Bookmarked Movies'

  return (
    <MainDiv >
     <MainHome>
        <MovieRoutes/>
     </MainHome>

     <div>

     <Input output={output} setOutput={setOutput} placeholder={placeholder} />

       
      <TrendingForm>Bookmarked</TrendingForm>
      
      <DivContainer>
       {output.filter((item)=>item.isBookmarked).map((item, index)=>{
        const {title, isBookmarked} = item;
       
        return <MappedDiv key={index}>
        
        <BookmarkImage >
          <img src={checkedImage } alt="Bookmark" onClick={()=>deleteHandler(title)}/>
       </BookmarkImage>

         <MovieTexts >
         
         <img src={process.env.PUBLIC_URL + item.thumbnail.regular.large} alt="images" /> 
           <span>{item.year}</span>
           <span>{item.category}</span>
           <span>{item.rating}</span>
         </MovieTexts>

         <p style={{color:'white'}}>{title}</p>
       

        </MappedDiv>
        })}

      </DivContainer>
      </div>
     </MainDiv>
  )
}

export default Bookmarked


const MainDiv = styled.div`

@media screen and (min-width: 768px){
   display:flex;
 }
`

const MappedDiv = styled.div`

  width:40%;
  padding:2px 5px;

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
 padding-left:40px;
 color:white;
 font-size:18px;

 @media screen and (min-width: 768px){
   width:24%;
   margin-top:50px;
   font-size:22px;
 }

`
const MovieTexts = styled.div`
   span{
    font-size:14px;
    color:#5A698F;
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
 justify-content:space-around;
 flex-wrap:wrap;

 @media screen and (min-width: 768px){
  display:flex;
  justify-content:space-between;
  margin-left:40px;
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