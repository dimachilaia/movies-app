import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'

const Input = () => {
  return (
      <InputForm>
         <div>
            <img src={searchIcon} alt="image" />
            <input placeholder='Search for movies or TV series'/>
         </div>
        </InputForm>
  )
}

export default Input

const InputForm = styled.form`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;

  div{
    display:flex;
    align-items:center;
    padding-right:20px;
  }
  
  img{
    width:24px;
    height:24px;
    padding-right:20px;
  }

 input{
  border:none;
  outline:none;
  width:250px;
  color:white;
  font-size:17px;
  height:20px;
  background-color:#10141E;
 }
`