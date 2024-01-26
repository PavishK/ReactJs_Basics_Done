import React from 'react'
//import Hello from './Hello'
//import Myclass from './Myclass'
//import Ter from './Ter'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Layout from './Layout'
//import Basic from './Event/Basic'
//import Count from './Event/Count'


export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>

  </Route>
  </Routes>

</BrowserRouter>
  );
}