import React from 'react'
import styled from 'styled-components'

const TrendingMovie = ({item}) => {

    let Icon;

    if (item.category === 'Movie') {
        Icon = process.env.PUBLIC_URL + '/assets/icon-category-movie.svg';
    } else if (item.category === 'TV Series') {
        Icon = process.env.PUBLIC_URL + '/assets/icon-category-tv.svg';
    }

  return (
    <TrendingMovieComponent >
    <div>
        <img src={process.env.PUBLIC_URL + item.thumbnail.trending.small}/>
    </div>

    <MovieInfo>
        <p>{item.year}</p>

        <div style={{display:'flex', alignItems:'center'}}>
        <img src={Icon} alt="oval"  style={{width:'12px', height:'10.1px', paddingRight:'5px', opacity:'0.75'}}/>
        <p>{item.category}</p>
        </div>

        <p>.{item.rating}</p>

        </MovieInfo>
        <Title>{item.title}</Title>

    </TrendingMovieComponent>
  )
}

export default TrendingMovie

const TrendingMovieComponent = styled.div`
  position:relative;
  margin-left:15px;
 img{
     width:200px;
     border-radius:10px;
 }
@media screen and (min-width: 768px){
    img{
    width:370px;
    border-radius:20px;
   }
 }

 @media screen and (min-width: 1024px){
    img{
    width:415px;
   }
   
 }

 @media screen and (min-width: 1200px){
    img{
    width:415px;
   }
 }

`

const MovieInfo = styled.div`
    display:flex;
    gap:10px;
    position:absolute;
    left:20px;
    top:45%;

    @media screen and (min-width: 768px){
        left:20px;
        top:55%;
 }

    @media screen and (min-width: 1024px){
        left:20px;
        top:65%;
 }

    p{
    color:#FFFFE0;
    font-size: 12px;
    font-weight: 300;
    padding:1px 5px;
    line-height: 14px;
    }
    

    @media screen and (min-width: 1200px){
   p{
    font-size: 17px;
   }
 }
`
const Title = styled.div`
  position:absolute;
    left:20px;
    top:65%;
    color:white;
    margin-top:10px;
    font-size: 15px;

    @media screen and (min-width: 768px){
        left:20px;
        top:65%;
        font-size:21px;
 }

    @media screen and (min-width: 1024px){
        left:20px;
        top:77%;
        font-size:25px;
 }
`