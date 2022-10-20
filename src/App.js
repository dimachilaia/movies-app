import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom'
import { useSelector } from "react-redux";
import Home from './components/Home'
import Movies from "./components/Movies";
import Series from "./components/Series";
import Bookmarked from "./components/Bookmarked";
import myData from './data.json'
import Input from "./components/Input";

function App() {
  const [data, setData] = useState(myData)

  const isAuth = useSelector(state=>state.auth.isAuthenticated)
  
  return (
   
    <Routes>
      {!isAuth && <Route path="/movies-app" element={<Login/>}/>}
      {isAuth && <Route path="home" element={<Home data={data}/>}/>}
          <Route path="home" element={<Home data={data}/>}/>
          <Route path="signup" element={<Signup data={data}/>}/>
          <Route path="movies" element={<Movies data={data}/>}/>
          <Route path="series" element={<Series data={data}/>}/>
          <Route path="bookmarked" element={<Bookmarked/>}/>
    </Routes>

  );
}

export default App;