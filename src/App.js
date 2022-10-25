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
  const [output, setOutput] = useState(myData)

  //
  const isAuth = useSelector(state=>state.auth.isAuthenticated)
  
  return (
   <Routes>
   {!isAuth && <Route path="/movies-app" element={<Login/>}/>}
   {isAuth && <Route path="home" element={<Home data={data} setData = {setData} output={output} setOutput ={setOutput}/>}/>}
      <Route path="home" element={<Home data={data} output={output} setData={setData} setOutput ={setOutput}/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="movies" element={<Movies output={output} setOutput={setOutput}/>}/>
      <Route path="series" element={<Series data={data} output={output} setOutput={setOutput}/>}/>
      <Route path="bookmarked" element={<Bookmarked output={output} setOutput={setOutput}/>}/>
   </Routes>

  );
}

export default App;