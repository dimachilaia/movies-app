import React from 'react'

const Trending = () => {
  return (
    <div>Trending</div>
  )
}

export default Trending
// import { useEffect } from "react"
// import styled from "styled-components"

// const Trending = ({item}) => {

//   return (
//     <TrendingForm>
//         <div>
//             <img  src={process.env.PUBLIC_URL + item.thumbnail.regular.large}/> 
//             <FilmsInfo>
//               <span>{item.title}</span>
//               <span>{item.category}</span>
//               <span>{item.rating}</span>
//             </FilmsInfo>
//               <span style={{color:'white', fontSize:'13px'}}>{item.title}</span>
//             </div>
//     </TrendingForm>
//   )
// }

// export default Trending

// const TrendingForm = styled.div`
//   display:flex;
//   margin-top:10px;
//   justify-content:space-evenly;

//   @media screen and (min-width: 542px){
//     width:25%;
//     padding:1px 4px;
//   }

//   @media screen and (min-width: 768px){
//     display:flex;
//     flex-wrap:wrap;
//     width:20%;
//     padding:1px 14px;
//   }

//   @media screen and (min-width: 1024px){
//     display:flex;
//     flex-wrap:wrap;
//     width:19%;
//     padding:1px 14px;
//   }


//  img{
//   width:164px;
//   height:110px;
//  }

//  p{
//   font-size:16px;
//  }
// `

// const FilmsInfo = styled.div`

//  span{
//   font-size:11px;
//   color:#FFFFFF;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 300;
// font-size: 11px;
// line-height: 14px;
//   padding:1px 3px;
//  }
// `