import styled from 'styled-components'
import Input from './Input'
import MovieRoutes from './MovieRoutes'
import bookmarkedImage from '../assets/icon-bookmark-empty.svg'
import Trending from './Trending'
import checkedImage from '../assets/icon-bookmark-full.svg'

const Movies = ({data, setData,output, setOutput}) => {

  const checkedHandler = (title)=>{
    const outputChecker = output.map((item)=>{
      if(item.title === title){
        item.isBookmarked = !item.isBookmarked
      }
      return item;
    })
    setOutput(outputChecker)
  }

  return (
    <MainDiv >
     <MainHome>
        <MovieRoutes path = "/movies"/>
     </MainHome>

     <div>
       <Input data={data} output={output} setOutput={setOutput}/>
       
      <TrendingForm>Movies</TrendingForm>

      <Trending/>
      
      <DivContainer>
      {output.filter((item)=>item.category === "Movie").map((item, index)=>{
        const {title, category, year, isBookmarked} = item;
        
        return <MappedDiv key={index}>
        
        <BookmarkImage onClick={()=>checkedHandler(title)}>
          <img src={isBookmarked ?checkedImage  : bookmarkedImage} alt="Bookmark"/>
       </BookmarkImage>

         <img src={process.env.PUBLIC_URL + item.thumbnail.regular.large} alt="images"/>

         <MovieTexts>
           <span>{item.year}</span>
           <span>{item.category}</span>
           <span>{item.rating}</span>
         </MovieTexts>

         <p style={{color:'white'}}>{item.title}</p>
       

        </MappedDiv>
        })}

      </DivContainer>
      </div>
     </MainDiv>
  )
}

export default Movies




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
 padding-left:20px;
 color:white;
 font-size:18px;

 @media screen and (min-width: 768px){
   width:24%;
   margin-top:50px;
   font-size:29px;
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