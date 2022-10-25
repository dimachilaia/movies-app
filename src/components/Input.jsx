import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'
import myData from '../data.json'

const Input = ({ setOutput}) => {
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
          <img src={searchIcon} alt="search-icon"/>
          <input placeholder='Search for movies or TV series' onChange={(e)=>setInput(e.target.value)}/>
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