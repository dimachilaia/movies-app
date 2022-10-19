import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../redux/AuthSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = (e)=>{
      e.preventDefault()
      dispatch(AuthActions.login())
      navigate('/home')
    }

  return (
    <LoginForm onSubmit={loginHandler}>
       <h1>Login</h1>
       
      <div>
       <input type="email" placeholder='Email address' required />
         <Line></Line>
       <input type="password" placeholder='Password' required />
         <Line></Line>
       </div>

       <div>
          <button type='submit'>Login to you account</button>
          <p>Don't have an account? 
            <Link to="/signup"> Sign up</Link>
          </p>
       </div>

    </LoginForm>
  )
}

export default Login;


const LoginForm = styled.form`
  background-color: #161D2F;
  height:373px;
  max-width:100%;
  width:310px;
  padding:15px 20px;
  margin:0 auto;
  margin-top:110px;
  border-radius: 20px;

  @media screen and (min-width:768px){
  width:400px;
  height:400px;
  h1{
     text-align:center;
  }
 }

 
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
    border-radius: 6px;
    border:none;
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