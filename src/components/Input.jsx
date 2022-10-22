import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'

const Input = () => {
  return (
         <InputForm>
            <img src={searchIcon} alt="image" />
            <input placeholder='Search for movies or TV series'/>
         </InputForm>
  )
}

export default Input

const InputForm = styled.form`
      display:flex;
      margin-top:13px;
      align-items:center;
      margin-left:25px;


    @media screen and (min-width: 768px){
      transform:translateY(25px)
    }


  img{
    width:25px;
    height:25px;
    padding-right:10px;

    @media screen and (min-width: 768px){
     width:30px;
    }
  }

 input{
  border:none;
  outline:none;
  width:250px;
  color:white;
  font-size:17px;
  height:20px;
  background-color:#10141E;

  @media screen and (min-width: 768px){
     font-size:22px;
     width:400px;
    }
 }
`