import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'
import myData from '../data.json'

const Input = ({ output, setOutput, placeholder, filteredMovies}) => {
  const [input, setInput] = useState('')

  useEffect(()=>{
    setOutput([])
    {myData.filter((item)=>{
      if(item.title.toLowerCase().includes(input.toLowerCase(''))){
        setOutput((output)=>[...output, item])
      }
    })}
  },[input])

  const submitHandler = (e)=>{
    e.preventDefault()
  }


 
  return (
        <InputForm onSubmit={submitHandler}>
        <div>
          <img src={searchIcon} alt="search-icon"/>
          <input placeholder={placeholder} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        { input && <p style={{color:'white'}}>Found {filteredMovies.length} results for "{input}" </p>}
        </InputForm>
  )
}

export default Input

const InputForm = styled.form`
      margin-top:13px;
      margin-left:17px;


    @media screen and (min-width: 768px){
      transform:translateY(25px);
      margin-left:10px;

    }


  img{
    width:25px;
    height:25px;
    transform:translateY(5px);
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