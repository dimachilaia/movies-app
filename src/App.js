import Login from "./components/Login";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom'
import { useSelector } from "react-redux";
import Home from './components/Home'

function App() {
  const isAuth = useSelector(state=>state.auth.isAuthenticated)

  return (
    <Routes>
      {!isAuth && <Route path="/" exact element={<Login/>}/>}
      {isAuth && <Route path="/home" element={<Home/>}/>}
      <Route path="/home" element={<Home/>}/>
      <Route path="signup" element={<Signup/>}/>
 </Routes>
  );
}

export default App;