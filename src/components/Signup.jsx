import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <SignupForm>
       <h1>Login</h1>
      <div>
       <input type="email" placeholder='Email address' required/>
         <Line></Line>
       <input type="password" placeholder='Password' required/>
         <Line></Line>
       <input type="password" placeholder='Repeat password' required/>
         <Line></Line>
       </div>

       <div>
         <button>Login to you account</button>
         <p>Already have an account? <a href='#'>Login</a></p>
       </div>
    </SignupForm>
  )
}

export default Signup

const SignupForm = styled.form`
  background-color: #161D2F;
  height:373px;
  max-width:100%;
  width:310px;
  padding:15px 20px;
  margin:0 auto;
  margin-top:100px;

  h1{
    color:white;
  }
  div{
    display:flex;
    align-items:center;
    flex-direction:column;
  }
  input{
    margin-top:20px;
    border:none;
    outline:none;
    width:280px;
    height:48px;
    color:white;
    background-color: #161D2F;
  }
  button{
    margin:0 auto;
    margin-top:20px;
    display:flex;
    justify-content:center;
    width:280px;
    cursor:pointer;
    height:48px;
    align-items:center;
    color: #FFFFFF;
    background-color:#FC4747;
  }
  p{
    color:white;
  }
  a{
    color:#FC4747;
  }
`

const Line = styled.div`
 width:289px;
 height:1px;
 background-color:#5A698F;
`